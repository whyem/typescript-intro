module MyModule {    
    class Vehicle {
        constructor(public name: string = 'Vehicle',
            private _distance: number = 0) {
        }
        get distance(): number { return this._distance; }
        set distance(newDistance: number) { this._distance = newDistance; }
        move(): void { this._distance += 1; }
    }

    export class Car extends Vehicle {
        constructor(public name: string = 'Car') {
            super();
        }
    }
}
