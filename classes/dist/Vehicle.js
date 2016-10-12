"use strict";
var Vehicle = (function () {
    function Vehicle(_name, _distance) {
        if (_name === void 0) { _name = 'Vehicle'; }
        if (_distance === void 0) { _distance = 0; }
        this._name = _name;
        this._distance = _distance;
    }
    Object.defineProperty(Vehicle.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (newDistance) {
            this._distance = newDistance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.move = function () {
        this.distance += 1;
    };
    Vehicle.prototype.toString = function () {
        return this._name;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map