// 10-car.js
const _brand = Symbol('brand');  // Define a symbol for brand
const _motor = Symbol('motor');  // Define a symbol for motor
const _color = Symbol('color');  // Define a symbol for color

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand; // Store brand using symbol
    this[_motor] = motor; // Store motor using symbol
    this[_color] = color; // Store color using symbol
  }

  cloneCar() {
    return new this.constructor(); // Return a new instance of the same class
  }
}
