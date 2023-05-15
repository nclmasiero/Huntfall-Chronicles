const Script = require("../script.js");

class Mask extends Script {
    constructor() {
        super("Mask");
    }

    isOverlapping(other) { // other must be a mask
        return true;
    }
}

module.exports = Mask;