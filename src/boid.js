import { Position } from "./position.js";

class Boid{

    constructor(){
        this.position = new Position(0,0);
    }

    getPosition(){
        return this.position;
    }

}

export {Boid};