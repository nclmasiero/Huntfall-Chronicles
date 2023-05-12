// initializations
const socket = io("localhost:3000");
var inputHandler = new InputHandler();

// events
socket.on("setKeys", (keys) => {
    inputHandler.toRecord = keys;
});

// code
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);

    inputHandler.update();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// functions