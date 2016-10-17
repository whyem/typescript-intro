var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Merged;
(function (Merged) {
    var name = 'Archivo A';
    var Door = (function () {
        function Door(_color) {
            if (_color === void 0) { _color = 'White'; }
            this._color = _color;
        }
        Object.defineProperty(Door.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (newColor) {
                this._color = newColor;
            },
            enumerable: true,
            configurable: true
        });
        return Door;
    }());
    Merged.Door = Door;
})(Merged || (Merged = {}));
var Merged;
(function (Merged) {
    var name = 'Archivo B';
    /**
    * Car
    */
    var Car = (function () {
        function Car(distance) {
            if (distance === void 0) { distance = 0; }
            this.distance = distance;
        }
        Car.prototype.move = function () {
            this.distance += 1;
        };
        return Car;
    }());
    Merged.Car = Car;
})(Merged || (Merged = {}));
var MyModule;
(function (MyModule) {
    var Vehicle = (function () {
        function Vehicle(name, _distance) {
            if (name === void 0) { name = 'Vehicle'; }
            if (_distance === void 0) { _distance = 0; }
            this.name = name;
            this._distance = _distance;
        }
        Object.defineProperty(Vehicle.prototype, "distance", {
            get: function () { return this._distance; },
            set: function (newDistance) { this._distance = newDistance; },
            enumerable: true,
            configurable: true
        });
        Vehicle.prototype.move = function () { this._distance += 1; };
        return Vehicle;
    }());
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(name) {
            if (name === void 0) { name = 'Car'; }
            _super.call(this);
            this.name = name;
        }
        return Car;
    }(Vehicle));
    MyModule.Car = Car;
})(MyModule || (MyModule = {}));
/// <reference path="MyModule.ts" />
/// <reference path="./A.ts" />
/// <reference path="./B.ts" />
var myCar = new MyModule.Car('Mi Auto');
console.log(myCar.name);
var car = new Merged.Car(1);
var door = new Merged.Door('Blanco');
car.move();
car.move();
console.log(car.distance);
console.log(door.color);
//# sourceMappingURL=run.js.map