import * as math from 'mathjs';

export abstract class Primitive {
  abstract readonly type: PrimitiveType;
}

export class Point extends Primitive {
  type = PrimitiveType.Point;
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static toPoint(array: number[]): Point {
    const w = array[3];
    return new Point(array[0] / w, array[1] / w, array[2] / w);
  }

  toArray() {
    return [this.x, this.y, this.z];
  }

  toLibMatrix() {
    return math.matrix([this.x, this.y, this.z, 1]);
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
