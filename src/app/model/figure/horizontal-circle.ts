import {BaseFigure} from './base-figure';
import {Point, Primitive} from '../primitive/primitive.model';
import {PrimitiveUtil} from '../../utils/primitive-util';

export class HorizontalCircle extends BaseFigure {
  private readonly basePoint: Point;
  private radius: number;
  private quality: number;

  constructor(basePoint: Point, color: string, radius: number, quality: number) {
    super(color);
    this.basePoint = basePoint;
    this.radius = radius;
    this.quality = quality;
  }

  getPrimitives(): Primitive[] {
    const angle = 360 / this.quality;
    let previousPoint: Point = PrimitiveUtil.moveAroundXZ(this.basePoint, this.radius, 0);
    let currentPoint: Point = null;

    for (let i = 0; i < 360; i += angle) {
      currentPoint = PrimitiveUtil.moveAroundXZ(this.basePoint, this.radius, i);
      this.primitives.push(currentPoint);
      this.addLine(previousPoint, currentPoint);
      previousPoint = currentPoint;
    }
    this.addLine(currentPoint, PrimitiveUtil.moveAroundXZ(this.basePoint, this.radius, 0));
    return this.primitives;
  }
}
