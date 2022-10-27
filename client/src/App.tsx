import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

import Home from "./pages/Home";
import SingleplayerGame from "./pages/SingleplayerGame";

const App = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <BrowserRouter>
            <Button
                margin={5}
                onClick={toggleColorMode}
                variant="ghost"
                pos={"absolute"}
                right={0}
            >
                <MoonIcon w={4} h={4} />
            </Button>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/singleplayer" element={<SingleplayerGame />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
