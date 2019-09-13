import {BaseFigure} from './base-figure';
import {Point, Primitive} from '../primitive/primitive.model';
import {VerticalRectangle} from './vertical-rectangle';
import {PrimitiveUtil} from '../../utils/primitive-util';

export class Parallelepiped extends BaseFigure {
  private basePoint: Point;
  private length: number;
  private width: number;
  private height: number;

  constructor(basePoint: Point, color: string, length: number, width: number, height: number) {
    super(color);
    this.basePoint = basePoint;

    this.length = length;
    this.width = width;
    this.height = height;
  }

  getPrimitives(): Primitive[] {
    const rect1 = new VerticalRectangle(this.basePoint, this.color, this.length, this.height);
    const rect2 = new VerticalRectangle(PrimitiveUtil.plusZ(this.basePoint, this.width), this.color, this.length, this.height);

    this.addLines(rect1, rect2);
    rect1.getPrimitives().forEach(p => this.primitives.push(p));
    rect2.getPrimitives().forEach(p => this.primitives.push(p));
    return this.primitives;
  }

  private addLines(rect1: VerticalRectangle, rect2: VerticalRectangle): void {
    const points1 = PrimitiveUtil.getPoints(rect1.getPrimitives());
    const points2 = PrimitiveUtil.getPoints(rect2.getPrimitives());

    for (let i = 0; i < 5; i++) {
      this.addLine(points1[i], points2[i]);
    }
  }
}
