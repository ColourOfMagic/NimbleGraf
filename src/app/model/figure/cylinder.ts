import {BaseFigure} from './base-figure';
import {Point, Primitive} from '../primitive/primitive.model';
import {HorizontalCircle} from './horizontal-circle';
import {PrimitiveUtil} from '../../utils/primitive-util';

export class Cylinder extends BaseFigure {
  private readonly basePoint: Point;
  private readonly height: number;
  private readonly radius: number;
  private readonly quality: number;

  constructor(basePoint: Point, color: string, height: number, radius: number, quality: number) {
    super(color);
    this.basePoint = basePoint;
    this.height = height;
    this.radius = radius;
    this.quality = quality;
  }

  getPrimitives(): Primitive[] {
    const bottomCircle = new HorizontalCircle(this.basePoint, this.color, this.radius, this.quality);
    const topCircle = new HorizontalCircle(PrimitiveUtil.plusY(this.basePoint, this.height), this.color, this.radius, this.quality);

    this.addLines(bottomCircle, topCircle);
    bottomCircle.getPrimitives().forEach(p => this.primitives.push(p));
    topCircle.getPrimitives().forEach(p => this.primitives.push(p));
    return this.primitives;
  }

  private addLines(bottomCircle: HorizontalCircle, topCircle: HorizontalCircle) {
    const points1 = PrimitiveUtil.getPoints(bottomCircle.getPrimitives());
    const points2 = PrimitiveUtil.getPoints(topCircle.getPrimitives());

    for (let i = 0; i < points1.length; i++) {
      this.addLine(points1[i], points2[i]);
    }
  }
}
