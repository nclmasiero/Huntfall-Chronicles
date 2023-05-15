const Script = require("../script.js");
const input = require("../inputHandler.js");

class PlayerMovement extends Script {
    constructor(socket) {
        super("PlayerMovement");

        this.socket = socket;
    }

    setup() {
        this.socket.emit("setKeys", [83, 87, 65, 68]);
        input.addPair(this.socket.id, (inputs) => {
            let xDirection = 0;
            let yDirection = 0;

            for (let input of inputs) {
                if(input.type != "key") continue;
                if(input.value == false) continue;

                if(input.code == 83) yDirection++;
                if(input.code == 87) yDirection--;
                if(input.code == 65) xDirection--;
                if(input.code == 68) xDirection++;

                this.parent.position.x += xDirection;
                this.parent.position.y += yDirection;
            }
        });
    }
}

module.exports = PlayerMovement;