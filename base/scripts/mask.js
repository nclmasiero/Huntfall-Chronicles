const Script = require("../script.js");

class Mask extends Script {
    constructor() {
        super("Mask");
    }

    isOverlapping(otherMask) {
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