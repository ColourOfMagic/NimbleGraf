import {Line, Point, Primitive, PrimitiveType} from './model/primitive/primitive.model';
import {PrimitiveUtil} from './utils/primitive-util';
import {RenderSettings} from './model/base-model';
import {BaseFigure} from './model/figure/base-figure';
import {RotateUtil} from './utils/rotate-util';

export class Painter {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly backgroundColor;
  private readonly drawWidth = 3;

  constructor(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number, backgroundColor: string) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.backgroundColor = backgroundColor;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.invertCanvas();
  }

  draw(figures: BaseFigure[], settings: RenderSettings): void {
    this.clearCanvas();
    figures.forEach(figure => this.drawPrimitives(figure.getPrimitives(), settings, figure.color));
  }

  private drawPrimitives(primitives: Primitive[], settings: RenderSettings, color: string) {
    PrimitiveUtil.logPrimitives(primitives);
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
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
        this.drawPoint(primitive as Point, settings);
        break;
      case PrimitiveType.Line:
        this.drawLine(primitive as Line, settings);
        break;
    }
  }

  private drawPoint(point3D: Point, settings: RenderSettings) {
    const point = PrimitiveUtil.coordinatePoint(RotateUtil.rotatePoint(point3D, settings.angles), settings.position);
    this.ctx.moveTo(point.x, point.y);
    this.ctx.arc(point.x, point.y, this.drawWidth, 0, Math.PI * 2, false);
    this.ctx.fill();
  }

  private invertCanvas() {
    this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
  }

  private drawLine(line3D: Line, settings: RenderSettings) {
    const line = PrimitiveUtil.coordinateLine(RotateUtil.rotateLine(line3D, settings.angles), settings.position);
    this.ctx.moveTo(line.p1.x, line.p1.y);
    this.ctx.lineTo(line.p2.x, line.p2.y);
  }
}
