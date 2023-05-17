class Collision {
    static checkCollisions(entities) {
        for (let i = 0; i < entities.length; i++) {
            for(let j = i + 1; j < entities.length; j++) {
                let mask1 = entities[0].getScript("Mask");
                let mask2 = entities[1].getScript("Mask");

                let collision = mask1.isOverlapping(mask2);
                console.log(collision);
            }
        }
    }
}

module.exports = Collision;