import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import GuessOneLetter from "../types/hangmanApi/GuessOneLetter";
import GuessOneLetterArgs from "../types/hangmanApi/GuessOneLetterArgs";
import HangmanGame from "../types/hangmanApi/HangmanGame";

export const hangmanApi = createApi({
    reducerPath: "hangmanApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://hangman-api.herokuapp.com/",
    }),
    endpoints: (builder) => ({
        createNewGame: builder.query<HangmanGame, void>({
            query: () => ({ url: "hangman", method: "POST" }),
        }),
        guessOneLetter: builder.query<GuessOneLetter, GuessOneLetterArgs>({
            query: (args) => ({
                url: `/hangman?token=${args.gameToken}&letter=${args.letter}`,
                method: "PUT",
            }),
        }),
    }),
});

export const { useCreateNewGameQuery, useGuessOneLetterQuery } = hangmanApi;
