import {Line, Point, Primitive} from '../primitive/primitive.model';

export abstract class BaseFigure {
  color: string;
  primitives: Primitive[];

  protected constructor(color: string) {
    this.color = color;
    this.primitives = [];
  }

  abstract getPrimitives(): Primitive[];

  protected addPoint(point: Point): void {
    this.primitives.push(point);
  }

  protected addLine(p1: Point, p2: Point): void {
    this.primitives.push(new Line(p1, p2));
  }
}
