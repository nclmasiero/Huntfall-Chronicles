// imports
const express = require("express");
const socketio = require("socket.io");
const Entity = require("./base/entity.js");
const utils = require("./base/utils.js");

// server setup
const app = express();
app.use(express.static("public"));
const server = app.listen(3000, () => {
    console.log("Server started!");
});
const io = socketio(server);

// code
var entities = [];
var frameCounter = 0;

setInterval(() => {
    for (let entity of entities) {
        entity.update();
    }
    frameCounter++;
}, 16);

// events
io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
    
    entities.push(new Entity("test", utils.nclRandom(0, 800), utils.nclRandom(0, 500), 50, 50));

    socket.on("getUpdate", () => {
        socket.emit("update", entities);
    });
});