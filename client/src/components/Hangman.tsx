import React, { useEffect } from "react";
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";

import HangmanProps from "../types/HangmanProps";

import Hangman1 from "../assets/Hangman1";
import Hangman2 from "../assets/Hangman2";
import Hangman3 from "../assets/Hangman3";
import Hangman4 from "../assets/Hangman4";
import Hangman5 from "../assets/Hangman5";
import Hangman6 from "../assets/Hangman6";
import Hangman7 from "../assets/Hangman7";
import Hangman8 from "../assets/Hangman8";

const Hangman = ({
    amountOfWrongAnswers,
    maxMaxAmountOfWrongAnswers,
}: HangmanProps) => {
    const color = useColorModeValue("black", "white");

    const arrayOfHangmans = [
        <Hangman1 color={color} />,
        <Hangman2 color={color} />,
        <Hangman3 color={color} />,
        <Hangman4 color={color} />,
        <Hangman5 color={color} />,
        <Hangman6 color={color} />,
        <Hangman7 color={color} />,
        <Hangman8 color={color} />,
    ];

    return (
        <Box marginTop={5}>
            <VStack>
                {arrayOfHangmans[amountOfWrongAnswers]}
                <Text>
                    Wrong answers: {amountOfWrongAnswers} /{" "}
                    {maxMaxAmountOfWrongAnswers}
                </Text>
            </VStack>
        </Box>
    );
};
export default Hangman;
