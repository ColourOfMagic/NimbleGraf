export class Painter {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;

  constructor(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw(backgroundColor: string) {
    this.drawBackground(backgroundColor);
    this.ctx.fillStyle = 'rgb(200,0,0)';
    this.ctx.fillRect(10, 10, 55, 50);

    this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    this.ctx.fillRect(30, 30, 55, 50);

    window.requestAnimationFrame(() => this.draw(backgroundColor));
  }

  private drawBackground(backgroundColor: string) {
    this.ctx.fillStyle = backgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

}
