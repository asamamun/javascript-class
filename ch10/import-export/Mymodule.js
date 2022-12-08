export const PI = Math.PI;
export function degreesToRadians(d) { return d * PI / 180; }
export class Circle {
constructor(r) { this.r = r; }
area() { return PI * this.r * this.r; }
}