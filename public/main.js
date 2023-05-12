const socket = io("localhost:3000");

var entities = [];

socket.on("update", (_entities) => {
    entities = _entities;
})

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);

    socket.emit("getUpdate");

    for(let entity of entities) {
        noStroke();
        fill(255);
        circle(entity.position.x, entity.position.y, entity.size.x);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}