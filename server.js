// imports
const express = require("express");
const socketio = require("socket.io");
const Entity = require("./base/entity.js");
const NclVector = require("./base/vector.js");
const utils = require("./base/utils.js");
const inputHandler = require("./base/inputHandler.js");

// server setup
const app = express();
app.use(express.static("public"));
const server = app.listen(3000, () => {
    console.log("Server started!");
});
const io = socketio(server);

// code
function myFunc(inputs) {
    console.log(inputs);
}

// events
io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
    
    socket.emit("setKeys", [83, 87]);
    inputHandler.addPair(socket.id, myFunc);

    socket.on("inputUpdate", (inputs) => {
        inputHandler.receiveInput(socket.id, inputs);
    });
});