import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { hangmanApi } from "./RTK Query/hangmanApiSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <ApiProvider api={hangmanApi}>
                <Container pos={"relative"} maxW={"1440px"}>
                    <App />
                </Container>
            </ApiProvider>
        </ChakraProvider>
    </React.StrictMode>
);

// https://hangman-api.herokuapp.com/api
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
