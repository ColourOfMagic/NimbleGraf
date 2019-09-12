export abstract class Primitive {
  abstract readonly type: PrimitiveType;
}

export class Point extends Primitive {
  type = PrimitiveType.Point;
  readonly x: number;
  readonly y: number;
  readonly z: number;

  constructor(x: number, y: number, z: number) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toArray() {
    return [this.x, this.y, this.z];
  }
}

export class Line extends Primitive {
  readonly type = PrimitiveType.Line;
  readonly point1: Point;
  readonly point2: Point;

  constructor(point1: Point, point2: Point) {
    super();
    this.point1 = point1;
    this.point2 = point2;
  }
}

export enum PrimitiveType {
  Point,
  Line
}
