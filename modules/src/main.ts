/// <reference path="MyModule.ts" />
/// <reference path="./A.ts" />
/// <reference path="./B.ts" />
const myCar = new MyModule.Car('Mi Auto');
console.log(myCar.name);

const car = new Merged.Car(1);
const door = new Merged.Door('Blanco');

car.move();
car.move();
console.log(car.distance);
console.log(door.color);
