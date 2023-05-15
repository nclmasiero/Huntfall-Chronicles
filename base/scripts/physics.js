const Script = require("../script.js");
const NclVector = require("../vector.js");

class Physics extends Script {
    constructor(entities) {
        super("Physics");

        this.speed = new NclVector(0, 0);
        this.maxSpeed = 15;
        this.isOnFloor = false;
        this.entities = entities;
    }

    setup() {
        this.mask = this.parent.getScript("Mask");
    }

    update() {
        this.applySpeed();
        this.applyFriction();
        this.applyGravity();
        this.checkFloor();

        this.capSpeed();

        // other stuff
        this.checkCollisions();
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

    checkFloor() { // temporary
        let floorLevel = 600;
        if (this.parent.position.y > floorLevel) {
            this.parent.position.y = floorLevel;
            this.speed.y = 0;
            this.isOnFloor = true;
        } else this.isOnFloor = false;
    }

    checkCollisions() {
        for (let entity of this.entities) {
            if(entity == this) continue;

            let otherMask = entity.getScript("Mask");
            let otherPhysics = entity.getScript("Physics");

            if(otherMask == null) continue;
            if(otherPhysics == null) continue;
        
            if (this.mask.isOverlapping(otherMask)) {
                console.log("collision");
            }
        }
    }
}

module.exports = Physics;