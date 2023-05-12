// imports
const express = require("express");
const socketio = require("socket.io");
const Entity = require("./base/entity.js");
const NclVector = require("./base/vector.js");
const utils = require("./base/utils.js");

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

    socket.emit("setKeys", [83, 87]);

    socket.on("inputUpdate", (inputs) => {
        console.log(inputs);
    });
});