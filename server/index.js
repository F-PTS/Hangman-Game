const express = require("express");
const app = express();
const { Server } = require("socket.io");
const dotenv = require("dotenv");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

const io = new Server(server);

dotenv.config();

app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});
