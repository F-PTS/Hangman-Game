import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AnswerIconProps from "../types/AnswerIconProps";

const AnswerIcon = ({ correct }: AnswerIconProps) => {
    return correct ? <CheckIcon /> : <CloseIcon />;
};

export default AnswerIcon;
