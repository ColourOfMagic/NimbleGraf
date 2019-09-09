import {Line, Point, Primitive, PrimitiveType} from '../model/primitive/primitive.model';
import {PositionedLine, PositionedPoint, RenderPosition} from '../model/base-model';

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

  static moveAroundXZ(point: Point, radius: number, angle: number): Point {
    const radAngle = -angle * Math.PI / 180;
    return new Point(point.x + Math.cos(radAngle) * radius, point.y, point.z + Math.sin(radAngle) * radius);
  }

  static logPrimitives(primitives: Primitive[]): void {
    console.log(JSON.stringify(primitives));
  }

  static coordinatePoint(point: Point, position: RenderPosition): PositionedPoint {
    switch (position) {
      case RenderPosition.Front:
        return {x: point.x, y: point.y};
      case RenderPosition.Top:
        return {x: point.x, y: point.z};
      case RenderPosition.Right:
        return {x: point.z, y: point.y};
      default:
        return {x: 0, y: 0};
    }
  }

  static coordinateLine(line: Line, position: RenderPosition): PositionedLine {
    return {p1: this.coordinatePoint(line.point1, position), p2: this.coordinatePoint(line.point2, position)};
  }

  static getPoints(primitives: Primitive[]): Point[] {
    const points: Point[] = [];
    primitives.forEach(
      (p) => {
        if (p.type === PrimitiveType.Point) {
          points.push(p as Point);
        }
      });
    return points;
  }
}
