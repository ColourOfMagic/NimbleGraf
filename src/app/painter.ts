export class Painter {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly backgroundColor;

  constructor(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number, backgroundColor: string) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.backgroundColor = backgroundColor;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw() {
    this.clearCanvas();
    this.testDraw();
  }

  clearCanvas() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  private testDraw() {
    this.ctx.fillStyle = 'rgb(200,0,0)';
    this.ctx.fillRect(10, 10, 55, 50);

    this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    this.ctx.fillRect(30, 30, 55, 50);
  }
}
