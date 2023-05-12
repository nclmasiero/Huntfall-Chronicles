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
var v = new NclVector(1, 1);
console.log(NclVector.radiansToDegrees(v.getAngle()));

// events
io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
});