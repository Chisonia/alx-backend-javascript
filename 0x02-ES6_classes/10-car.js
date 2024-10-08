export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store as regular properties with an underscore prefix
    this._motor = motor;
    this._color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  get brand() {
    return this._brand;
  }
  
  get motor() {
    return this._motor;
  }
  
  get color() {
    return this._color;
  }
  
  cloneCar() {
    return new this.constructor();
  }
}
