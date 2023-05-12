class Script {
    constructor(name) {
        this.name = name;
        this.parent = null;
        this.isEnabled = true;
    }

    setParent(entity) {
        this.parent = entity;
    }

    disable() {
        this.isEnabled = false;
    }

    enable() {
        this.isEnabled = true;
    }

    setup() {
        // override
    }

    update() {
        // override
    }
}

module.exports = Script;