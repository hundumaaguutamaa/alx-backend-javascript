// EVCar.js
const Car = require('./Car');

class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    cloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

module.exports = EVCar;
