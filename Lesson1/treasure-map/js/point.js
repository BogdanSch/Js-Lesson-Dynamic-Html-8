export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(otherPoint) {
    return this.x === otherPoint.x && this.y === otherPoint.y;
  }
  toString() {
    return `X: ${this.x}, Y: ${this.y}`;
  }
}
