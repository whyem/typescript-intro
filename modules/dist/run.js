var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var myCar = new MyModule.Car('Mi Auto');
console.log(myCar.name);
//# sourceMappingURL=run.js.map