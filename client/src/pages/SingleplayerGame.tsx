import { Box, Center, Spinner, VStack, Text, calc } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Hangman from "../components/Hangman";
import LetterKeyBoard from "../components/LetterKeyBoard";
import {
    useCreateNewGameQuery,
    useFetchSolutionQuery,
} from "../RTK Query/hangmanApiSlice";

const SingleplayerGame = () => {
    const [amountOfWrongAnswers, setAmountofWrongAnswers] = useState<number>(0);
    const [skip, setSkip] = useState<boolean>(true);

    const { data } = useCreateNewGameQuery();
    const [hangmanWord, setHangmanWord] = useState<string | undefined>(
        data?.hangman
    );

    const { data: solutionData } = useFetchSolutionQuery(
        {
            gameToken: data?.token,
        },
        { skip }
    );

    const maxMaxAmountOfWrongAnswers = 7;
    const winningVardict: string | null =
        amountOfWrongAnswers === maxMaxAmountOfWrongAnswers
            ? "lost"
            : solutionData?.solution === hangmanWord
            ? "won"
            : null;

    const isGameOver = winningVardict;

    useEffect(() => {
        if (data?.hangman) {
            setHangmanWord(data?.hangman);
        }
    }, [data]);

    const changeAmountOfWrongAnswer = () => {
        setAmountofWrongAnswers(
            (amountOfWrongAnswers) => amountOfWrongAnswers + 1
        );
    };

    const changeHangmanWord = (newHangmanWord: string) => {
        setHangmanWord(newHangmanWord);
    };

    const changeSkip = (value: boolean) => {
        setSkip(value);
    };

    if (!data?.token && !data?.hangman)
        return (
            <Box>
                <Center h={"100vh"}>
                    <Spinner />
                </Center>
            </Box>
        );

    return (
        <Center>
            <VStack spacing={5}>
                <Hangman
                    maxMaxAmountOfWrongAnswers={maxMaxAmountOfWrongAnswers}
                    amountOfWrongAnswers={amountOfWrongAnswers}
                />

                <Text
                    fontSize={"5xl"}
                    letterSpacing={8}
                    color={
                        winningVardict === "lost"
                            ? "red"
                            : winningVardict === "won"
                            ? "green"
                            : "white"
                    }
                >
                    {isGameOver ? solutionData?.solution : hangmanWord}
                </Text>

                <LetterKeyBoard
                    isGameOver={isGameOver}
                    changeHangmanWord={changeHangmanWord}
                    changeAmountOfWrongAnswer={changeAmountOfWrongAnswer}
                    gameToken={data.token}
                    changeSkip={changeSkip}
                    skip={skip}
                />
            </VStack>
        </Center>
    );
};

export default SingleplayerGame;
