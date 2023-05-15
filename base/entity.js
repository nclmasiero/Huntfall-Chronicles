const NclVector = require("./vector.js");

class Entity {
    constructor(name, x, y, width, height, scripts = []) {
        this.name = name;
        this.position = new NclVector(x, y);
        this.size = new NclVector(width, height);

        this.rotation = 0;

        this.scripts = [];
        for(let script of scripts) {
            this.scripts.push(script);
            script.setParent(this);   
        }
        for(let script of scripts) {
            script.setup();
        }
    }

    getNeat() {
        return new Entity(this.name, this.position.x, this.position.y, this.size.x, this.size.y);
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

    getScript(name) {
        for(let script of this.scripts) {
            if(script.name == name) return script;
        }
        return null;
    }
}

module.exports = Entity;