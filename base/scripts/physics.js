const Script = require("../script.js");
const NclVector = require("../vector.js");

class Physics extends Script {
    constructor() {
        super("Physics");

        this.speed = new NclVector(0, 0);
        this.maxSpeed = 15;
    }

    update() {
        this.applySpeed();
        this.applyFriction();
        this.applyGravity();
        this.capSpeed();
    }

    // utils
    addSpeed(x, y) {
        this.speed.add(new NclVector(x, y));
    }

    // functions
    applySpeed() {
        this.parent.position.add(this.speed);
    }

    applyFriction() {
        let friction = 0.3;
        this.speed.x += -Math.sign(this.speed.x) * friction;
        if(Math.abs(this.speed.x) < friction) this.speed.x = 0;
    }

    capSpeed() {
        if(this.speed.x > this.maxSpeed) this.speed.x = this.maxSpeed;
        if(this.speed.x < -this.maxSpeed) this.speed.x = -this.maxSpeed;
    }

    applyGravity() {
        let gravity = 0.45;
        this.addSpeed(0, gravity);
    }
}

module.exports = Physics;