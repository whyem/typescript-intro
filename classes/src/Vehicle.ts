export class Vehicle {
    constructor(private _name: string = 'Vehicle',
        private _distance: number = 0) { }
    get distance(): number {
        return this._distance;
    }
    set distance(newDistance: number) {
        this._distance = newDistance;
    }
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    move() {
        this.distance += 1;
    }
    toString() {
        return this._name;
    }
}