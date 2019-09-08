import {Point, Primitive} from '../model/primitive/primitive.model';

export class PrimitiveUtil {
  static plusX(point: Point, num: number): Point {
    return new Point(point.x + num, point.y, point.z);
  }

  static plusY(point: Point, num: number): Point {
    return new Point(point.x, point.y + num, point.z);
  }

  static plusZ(point: Point, num: number): Point {
    return new Point(point.x, point.y, point.z + num);
  }

  static plusXYZ(point: Point, x: number, y: number, z: number): Point {
    return new Point(point.x + x, point.y + y, point.z + z);
  }

  static logPrimitives(primitives: Primitive[]): void {
    console.log(JSON.stringify(primitives));
  }
}
