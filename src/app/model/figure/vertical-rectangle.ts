import {BaseFigure} from './base-figure';
import {Point, Primitive} from '../primitive/primitive.model';
import {PrimitiveUtil} from '../../utils/primitive-util';

export class VerticalRectangle extends BaseFigure {
  private readonly basePoint: Point;
  private readonly length: number;
  private readonly height: number;

  constructor(basePoint: Point, color: string, length: number, height: number) {
    super(color);
    this.basePoint = basePoint;
    this.length = length;
    this.height = height;
  }

  getPrimitives(): Primitive[] {
    this.primitives.push(this.basePoint);
    const point2 = PrimitiveUtil.plusX(this.basePoint, this.length);
    const point3 = PrimitiveUtil.plusY(this.basePoint, this.height);
    const point4 = PrimitiveUtil.plusXYZ(this.basePoint, this.length, this.height, 0);
    this.addPoint(this.basePoint);
    this.addPoint(point2);
    this.addPoint(point3);
    this.addPoint(point4);

    this.addLine(this.basePoint, point2);
    this.addLine(point2, point4);
    this.addLine(point4, point3);
    this.addLine(point3, this.basePoint);

    return this.primitives;
  }
}
