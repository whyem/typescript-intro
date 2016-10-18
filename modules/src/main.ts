/// <reference path="../typings/node/node.d.ts" />
/// <reference path="./MyModule.ts" />
/// <reference path="./A.ts" />
/// <reference path="./B.ts" />

// Simple ts module import
const myCar = new MyModule.Car('Mi Auto');
console.log(myCar.name);

// Splitted ts module import
const car = new Merged.Car(1);
const door = new Merged.Door('Blanco');
car.move();
car.move();
console.log(car.distance);
console.log(door.color);

// External import
const common = require('../common');
console.log(common());