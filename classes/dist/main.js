"use strict";
var SimpleCar_1 = require('./SimpleCar');
var cars_1 = require('./cars');
var car = new SimpleCar_1.SimpleCar();
car.distance = 5;
car.move(); // Suma 1
console.log(car.distance);
// Car con uso constructor
var auto = new cars_1.Car('Auto');
console.log(auto.name);
// Truck con uso constructor con args default.
var truck = new cars_1.Truck();
console.log(truck.name);
//# sourceMappingURL=main.js.map