"use strict";
var SimpleCar = (function () {
    function SimpleCar() {
        this.distance = 0;
    }
    ;
    SimpleCar.prototype.move = function () {
        this.distance += 1;
    };
    return SimpleCar;
}());
exports.SimpleCar = SimpleCar;
//# sourceMappingURL=SimpleCar.js.map