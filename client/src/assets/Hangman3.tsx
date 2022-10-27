import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Hangman3({ color }: { color: string }) {
    return (
        <svg
            width="543"
            height="494"
            viewBox="0 0 543 494"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 487L543 487" stroke={color} stroke-width="13" />
            <path d="M281 8L281 84" stroke={color} stroke-width="7" />
            <circle
                cx="281"
                cy="139"
                r="51.5"
                stroke={color}
                stroke-width="7"
            />
            <path d="M275 64H286.5" stroke={color} stroke-width="31" />
            <path d="M139 487V7H352" stroke={color} stroke-width="13" />
            <path d="M139 65L195.5 8.5" stroke={color} stroke-width="12" />
            <path d="M139 430L195.5 486.5" stroke={color} stroke-width="12" />
            <path d="M83 486.5L139.5 430" stroke={color} stroke-width="12" />
        </svg>
    );
}

export default Hangman3;
