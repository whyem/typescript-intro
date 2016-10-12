import {Vehicle} from './Vehicle'
export class Car extends Vehicle {
    constructor(name?: string) {
        super();
        this.name = name || 'Car';
    }
}
export class Truck extends Vehicle {
    constructor(name?: string) {
        super();
        this.name = name || 'Truck';
    }
}