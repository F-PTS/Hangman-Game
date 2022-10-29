import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Flex,
    Spinner,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGuessOneLetterQuery } from "../RTK Query/hangmanApiSlice";
import Letter from "../types/Letter";
import LetterKeyBoardProps from "../types/LetterKeyBoardProps";

import englishCharacters from "../utils/englishCharacters";
import getLetters from "../utils/getLetters";
import AnswerIcon from "./AnswerIcon";

const LetterKeyBoard = ({
    changeAmountOfWrongAnswer,
    changeHangmanWord,
    isGameOver,
    gameToken,
    skip,
    changeSkip,
}: LetterKeyBoardProps) => {
    const [letterList, setLetterList] = useState<Letter[]>(
        getLetters(englishCharacters)
    );
    const [letterClicked, setLetterClicked] = useState<string | null>(null);
    const [token, setToken] = useState<string>(gameToken);

    const { data, isFetching } = useGuessOneLetterQuery(
        {
            gameToken: token,
            letter: letterClicked,
        },
        { skip }
    );

    useEffect(() => {
        if (!data) return;
        if (!data.correct) changeAmountOfWrongAnswer();

        setToken(data.token);

        changeHangmanWord(data.hangman);
    }, [data]);

    const handleLetterClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (isFetching) return;

        const letter: string = (e.target as HTMLButtonElement).innerText;

        setLetterList((letterList) =>
            letterList.map((element) =>
                element.value === letter
                    ? { value: element.value, isClicked: true }
                    : element
            )
        );

        changeSkip(false);
        setLetterClicked(letter);
    };

    const restartGame = () => {
        window.location.reload();
    };

    console.log(isGameOver);

    return (
        <VStack spacing={10}>
            <Center h={10}>
                {!skip &&
                    (isGameOver ? (
                        <Button
                            size={"sm"}
                            colorScheme={"purple"}
                            variant={"outline"}
                            onClick={restartGame}
                        >
                            Restart game
                        </Button>
                    ) : isFetching ? (
                        <Spinner />
                    ) : (
                        <AnswerIcon correct={data!.correct} />
                    ))}
            </Center>

            <Wrap w={"45%"} justify={"center"} spacing={2}>
                {letterList.map((value) => (
                    <WrapItem key={value.value}>
                        <Button
                            colorScheme={"purple"}
                            size={"md"}
                            variant={"ghost"}
                            disabled={isGameOver ? isGameOver : value.isClicked}
                            onClick={(event) => handleLetterClick(event)}
                        >
                            {value.value}
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>
        </VStack>
    );
};

export default LetterKeyBoard;
