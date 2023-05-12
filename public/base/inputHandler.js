class InputHandler {
    constructor(toRecord = []) {
        this.toRecord = toRecord; // arrays of keys to keep track of
    }

    update() {
        let inputs = [];
        let doSend = false;

        for(let i = 0; i < this.toRecord.length; i++) {
            let isPressed = keyIsDown(this.toRecord[i]);
            if(isPressed) doSend = true;
            inputs.push({
                key: this.toRecord[i],
                value: isPressed
            });
        }

        if(doSend) socket.emit("inputUpdate", inputs);
    }
}