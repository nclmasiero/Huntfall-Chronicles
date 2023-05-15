// imports
const express = require("express");
const socketio = require("socket.io");
const Entity = require("./base/entity.js");
const NclVector = require("./base/vector.js");
const utils = require("./base/utils.js");
const inputHandler = require("./base/inputHandler.js");
const PlayerMovement = require("./base/scripts/playerMovement.js");

// server setup
const app = express();
app.use(express.static("public"));
const server = app.listen(3000, () => {
    console.log("Server started!");
});
const io = socketio(server);

// code
var entities = [];
setInterval(() => {
    for(let entity of entities) {
        entity.update();
    }
}, 16);

// events
io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
    
    entities.push(new Entity("tmp", 300, 300, 40, 40, [
        new PlayerMovement(socket)
    ]));

    socket.on("getUpdate", () => {
        socket.emit("update", entities);
    });

    socket.on("inputUpdate", (inputs) => {
        inputHandler.receiveInput(socket.id, inputs);
    });
});