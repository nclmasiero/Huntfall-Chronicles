class NclVector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getMag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    setMag(newMag) {
        let currentMag = this.getMag();
        this.x = this.x * newMag / currentMag;
        this.y = this.y * newMag / currentMag;
    }

    add(otherVector) {
        this.x += otherVector.x;
        this.y += otherVector.y;
    }

    sub(otherVector) {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
    }

    getIdentity() {
        let identityVector = new NclVector(this.x, this.y);
        identityVector.setMag(1);
        return identityVector;
    }
}

module.exports = NclVector;