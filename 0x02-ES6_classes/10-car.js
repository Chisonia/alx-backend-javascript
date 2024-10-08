export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store as regular properties with an underscore prefix
    this._motor = motor;
    this._color = color;
  }
  cloneCar() {
    return new this.constructor();
  }
}
