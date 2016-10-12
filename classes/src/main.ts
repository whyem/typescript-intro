import {SimpleCar} from './SimpleCar'
import {Car, Truck} from './cars'

const car = new SimpleCar();
car.distance = 5;
car.move();// Suma 1
console.log(car.distance);

// Car con uso constructor
const auto = new Car('Auto');
console.log(auto.name);

// Truck con uso constructor con args default.
const truck = new Truck();
console.log(truck.name); 