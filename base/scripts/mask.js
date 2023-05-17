const Script = require("../script.js");
const NclVector = require("../vector.js");

class Mask extends Script {
    constructor() {
        super("Mask");
    }

    isOverlapping(otherMask) {
        let r1 = Math.min(this.parent.size.x, this.parent.size.y) / 2;
        let r2 = Math.min(otherMask.parent.size.x, otherMask.parent.size.y) / 2;
        let rSum = r1 + r2;

        let xDist = this.parent.position.x - otherMask.parent.position.x;
        let yDist = this.parent.position.y - otherMask.parent.position.y;
        let distance = Math.sqrt(xDist * xDist + yDist * yDist);

        let collisionVector = new NclVector(this.parent.position.x, this.parent.position.y);
        collisionVector.sub(otherMask.parent.position);
        collisionVector.setMag(Math.abs(distance - rSum));

        if (distance >= rSum) return false;
        return collisionVector;
    }

    isOverlappingRect(otherMask) {
        let xCheck1 = this.parent.position.x + this.parent.size.x/2 > otherMask.parent.position.x - otherMask.parent.size.x/2;
        let xCheck2 = this.parent.position.x - this.parent.size.x/2 < otherMask.parent.position.x + otherMask.parent.size.x/2;
        let yCheck1 = this.parent.position.y + this.parent.size.y/2 > otherMask.parent.position.y - otherMask.parent.size.y/2;
        let yCheck2 = this.parent.position.y - this.parent.size.y/2 < otherMask.parent.position.y + otherMask.parent.size.y/2;

        let horizontalCheck = xCheck1 && xCheck2;
        let verticalCheck = yCheck1 && yCheck2;

        return horizontalCheck && verticalCheck;
    }
}

module.exports = Mask;