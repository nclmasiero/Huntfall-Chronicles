class Collision {
    static checkCollisions(entities) {
        for (let i = 0; i < entities.length; i++) {
            if(!this.convalidateEntity(entities[i])) continue;

            for(let j = i + 1; j < entities.length; j++) {
                if(!this.convalidateEntity(entities[j])) continue;

                let mask1 = entities[i].getScript("Mask");
                let mask2 = entities[j].getScript("Mask");

                let collisionVector = mask1.isOverlapping(mask2);
                
                if (collisionVector != false) {
                    let collision = new Collision(entities[i], entities[j], collisionVector);
                    collision.applyCollision();
                }
            }
        }
    }

    static convalidateEntity(e) {
        return e.getScript("Mask") != null && e.getScript("Physics") != null;
    }

    constructor(a, b, vec) {
        this.a = a;
        this.b = b;
        this.vec = vec;
        this.vec.setMag(this.vec.getMag() / 2);
    }

    applyCollision() {
        this.snapBodies();
        // this.bounceBodies();
    }
    
    snapBodies() {
        this.a.position.add(this.vec);
        this.b.position.sub(this.vec);
    }
}

module.exports = Collision;