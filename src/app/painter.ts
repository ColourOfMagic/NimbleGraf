import {Point, Primitive, PrimitiveType} from './model/primitive/primitive.model';
import {PrimitiveUtil} from './utils/primitive-util';
import {PositionedPoint, RenderPosition, RenderSettings} from './model/base-model';

export class Painter {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly backgroundColor;
  private readonly blackColor = 'rgb(0, 0, 0)';
  private readonly drawWidth = 3;

  constructor(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number, backgroundColor: string) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.backgroundColor = backgroundColor;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.invertCanvas();
  }

  draw(primitives: Primitive[], settings: RenderSettings): void {
    PrimitiveUtil.logPrimitives(primitives);
    this.clearCanvas();
    this.ctx.beginPath();
    primitives.forEach(p => this.drawPrimitive(p, settings));
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  private drawPrimitive(primitive: Primitive, settings: RenderSettings): void {
    switch (primitive.type) {
      case PrimitiveType.Point:
        this.drawPoint(primitive as Point, settings.position);
        break;
      case PrimitiveType.Line:
        break;
    }
  }

  private drawPoint(point3D: Point, position: RenderPosition) {
    const point = this.coordinatePoint(point3D, position);
    this.ctx.fillStyle = this.blackColor;
    this.ctx.moveTo(point.x, point.y);
    this.ctx.arc(point.x, point.y, this.drawWidth, 0, Math.PI * 2, false);
    this.ctx.fill();
  }

  private invertCanvas() {
    this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
  }

  private coordinatePoint(point: Point, position: RenderPosition): PositionedPoint {
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
}
