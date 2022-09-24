class Vector{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(v){
        this.x = this.x + v.y;
        this.y = this.y + v.x;
    }
}

export {Vector};