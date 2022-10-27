import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Hangman8 = ({ color }: { color: string }) => {
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
            <path d="M281 193V305" stroke={color} stroke-width="7" />
            <path d="M281.5 300L232.5 349" stroke={color} stroke-width="7" />
            <path d="M281 300.5L330 349.5" stroke={color} stroke-width="7" />
            <path d="M280.5 204L330.5 254" stroke={color} stroke-width="7" />
            <path d="M231 254L281 204" stroke={color} stroke-width="7" />
            <path
                d="M254 124L271 141M254.5 141L271.5 124"
                stroke={color}
                stroke-width="7"
            />
            <path
                d="M292 124L309 141M292.5 141L309.5 124"
                stroke={color}
                stroke-width="7"
            />
            <path
                d="M295 169.822C290 161.656 277.4 150.222 267 169.822"
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
};

export default Hangman8;
