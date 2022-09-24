import { Boid } from "./boid.js";
import { Position } from "./position.js";

class BoidController {

    constructor(numBoids) {
      this.numBoids = numBoids;
      this.boids = Array(numBoids).fill(new Boid());
    }

    getBoids(){
        return this.boids;
    }

    update(){
        
    }

    calculateCenterOfMass(){
        var com = new Position(this.boids[0].getPosition().x, this.boids[0].getPosition().y);
        for (var i = 1; i < this.boids.length; i++){
            com.add(this.boids[i].getPosition());
        }
        com.divide(this.boids.length);
        return com;
    }

}

export {BoidController};