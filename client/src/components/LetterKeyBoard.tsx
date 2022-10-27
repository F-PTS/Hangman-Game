import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGuessOneLetterQuery } from "../RTK Query/hangmanApiSlice";
import LetterKeyBoardProps from "../types/LetterKeyBoardProps";

import englishCharacters from "../utils/englishCharacters";

interface Letter {
    value: string;
    isClicked: boolean;
}

const getLetters = () =>
    englishCharacters.map((value) => ({ value, isClicked: false }));

const LetterKeyBoard = ({
    changeAmountOfWrongAnswer,
    changeHangmanState,
    gameToken,
}: LetterKeyBoardProps) => {
    const [letterList, setLetterList] = useState<Letter[]>(getLetters());
    const [letterClicked, setLetterClicked] = useState<string | null>(null);
    const [token, setToken] = useState<string>(gameToken);
    const [skip, setSkip] = useState<boolean>(true);

    const { data, isFetching } = useGuessOneLetterQuery(
        {
            gameToken: token,
            letter: letterClicked,
        },
        { skip }
    );

    console.log(isFetching);

    useEffect(() => {
        if (!data) return;

        setToken(data.token);

        if (!data.correct) {
            changeAmountOfWrongAnswer();
        }
        setLetterList((letterList) =>
            letterList.map((letter) =>
                letter.value === letterClicked
                    ? { value: letter.value, isClicked: true }
                    : letter
            )
        );
        changeHangmanState(data.hangman);

        console.log(data);
    }, [data]);

    const handleLetterClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (isFetching) return;

        const eventLetterClicked: string = (e.target as HTMLButtonElement)
            .innerText;

        setSkip(false);
        setLetterClicked(eventLetterClicked);
    };

    return (
        <Wrap w={"45%"} justify={"center"} spacing={2}>
            {letterList.map((value) => (
                <WrapItem key={value.value}>
                    <Button
                        colorScheme={"purple"}
                        size={"lg"}
                        variant={"ghost"}
                        disabled={value.isClicked}
                        onClick={(event) => handleLetterClick(event)}
                    >
                        {value.value}
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default LetterKeyBoard;
