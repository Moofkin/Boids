class Position{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(position){
        this.x = this.x + position.x;
        this.y = this.y + position.y;
    }

    divide(n){
        this.x = this.x / n;
        this.y = this.y / n;
    }
}

export {Position};