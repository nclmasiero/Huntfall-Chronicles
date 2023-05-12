const NclVector = require("./vector.js");

class Entity {
    constructor(name, x, y, width, height, scripts = []) {
        this.name = name;
        this.position = new NclVector(x, y);
        this.size = new NclVector(width, height);

        this.rotation = 0;
        this.speed = new NclVector(0, 0);

        this.scripts = [];
        for(let script of scripts) {
            this.addScript(script);
        }
    }

    update() {
        for(let script of this.scripts) {
            if(script.isEnabled) script.update();
        }
    }

    addScript(newScript) {
        this.scripts.push(newScript);
        newScript.setParent(this);
        newScript.setup();
    }
}

module.exports = Entity;