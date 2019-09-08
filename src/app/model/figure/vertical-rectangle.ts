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
    this.primitives.push(PrimitiveUtil.plusX(this.basePoint, this.length));
    this.primitives.push(PrimitiveUtil.plusY(this.basePoint, this.height));
    this.primitives.push(PrimitiveUtil.plusXYZ(this.basePoint, this.length, this.height, 0));
    return this.primitives;
  }
}
