// initializations
const socket = io("localhost:3000");
var inputHandler = new InputHandler();

var entities = [];

// events
socket.on("setKeys", (keys) => {
    inputHandler.toRecord = keys;
});
socket.on("update", (_entities) => {
    entities = _entities;
});

// code
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);

    for(let entity of entities) {
        noStroke();
        fill(255);
        circle(entity.position.x, entity.position.y, entity.size.x * 2);
    }

    socket.emit("getUpdate");

    inputHandler.update();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// functions