interface ICar {
    distance: number;
    move(): void;
}

export class SimpleCar implements ICar {
    distance: number;
    constructor() {
        this.distance = 0;
    };
    move() {
        this.distance += 1;
    }
}
