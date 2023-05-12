class InputHandler {
    constructor(toRecord = []) {
        this.toRecord = toRecord; // arrays of keys to keep track of
        this.recordMouse = true;
    }

    update() {
        let inputs = [];

        if(this.recordMouse) {
            inputs.push({
                type: "mouse",
                position: {
                    x: mouseX,
                    y: mouseY
                }
            });
        }

        for(let i = 0; i < this.toRecord.length; i++) {
            inputs.push({
                type: "key",
                code: this.toRecord[i],
                value: keyIsDown(this.toRecord[i])
            });
        }

        socket.emit("inputUpdate", inputs);
    }
}