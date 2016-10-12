"use strict";
var Car = (function () {
    function Car() {
        this.distance = 0;
    }
    ;
    Car.prototype.move = function () {
        this.distance += 1;
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map