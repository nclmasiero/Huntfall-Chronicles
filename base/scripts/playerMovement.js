const Script = require("../script.js");
const input = require("../inputHandler.js");

class PlayerMovement extends Script {
    constructor(socket) {
        super("PlayerMovement");

        this.socket = socket;
    }

    setup() {
        this.socket.emit("setKeys", [83, 87]);
        input.addPair(this.socket.id, this.newInput);
    }

    newInput(inputs) {
    }
}

module.exports = PlayerMovement;