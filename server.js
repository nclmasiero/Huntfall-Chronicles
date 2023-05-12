// imports
const express = require("express");
const socketio = require("socket.io");

// server setup
const app = express();
app.use(express.static("public"));
const server = app.listen(3000, () => {
    console.log("Server started!");
});
const io = socketio(server);

// code


// events
io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
});