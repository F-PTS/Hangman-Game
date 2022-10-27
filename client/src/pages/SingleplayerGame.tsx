import { Box, Center, Spinner, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Hangman from "../components/Hangman";
import LetterKeyBoard from "../components/LetterKeyBoard";
import { useCreateNewGameQuery } from "../RTK Query/hangmanApiSlice";

const SingleplayerGame = () => {
    const [amountOfWrongAnswers, setAmountofWrongAnswers] = useState<number>(0);

    const { data } = useCreateNewGameQuery();
    const [hangmanWord, setHangmanWord] = useState<string | undefined>(
        data?.hangman
    );

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

    const changeHangmanState = (newHangmanWord: string) => {
        setHangmanWord(newHangmanWord);
    };

    if (!data?.token && !data?.hangman)
        return (
            <Center>
                <Box>
                    <Spinner />
                </Box>
            </Center>
        );

    return (
        <Center>
            <VStack spacing={10}>
                <Hangman amountOfWrongAnswers={amountOfWrongAnswers} />

                <Text fontSize={"5xl"} letterSpacing={8}>
                    {hangmanWord}
                </Text>

                <LetterKeyBoard
                    changeHangmanState={changeHangmanState}
                    changeAmountOfWrongAnswer={changeAmountOfWrongAnswer}
                    gameToken={data.token}
                />
            </VStack>
        </Center>
    );
};

export default SingleplayerGame;
