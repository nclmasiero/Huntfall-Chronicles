class Collision {
    static checkCollisions(entities) {
        for (let i = 0; i < entities.length; i++) {
            for(let j = i + 1; j < entities.length; j++) {
                let mask1 = entities[i].getScript("Mask");
                let mask2 = entities[j].getScript("Mask");

                let collision = mask1.isOverlapping(mask2);
                
                if (collision != false) this.applyCollision(entities[i], entities[j], collision);
            }
        }
    }

    static applyCollision(a, b, vec) {
        console.log(vec);
        vec.setMag(vec.getMag() / 2);
        a.position.add(vec);
        b.position.sub(vec);
    }
}

module.exports = Collision;