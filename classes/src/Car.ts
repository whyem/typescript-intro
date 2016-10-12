interface ICar {
    distance: number;
    move(): void;
}

class Car implements ICar {
    distance: number;
    constructor() {
        this.distance = 0;
    };
    move() {
        this.distance += 1;
    }
}

export {Car}