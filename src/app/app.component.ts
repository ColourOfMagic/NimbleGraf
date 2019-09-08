import {AfterViewInit, Component} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';
import {RenderSettings} from './model/base-model';
import {Primitive, Point} from './model/primitive/primitive.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  canvasWidth = 800;
  canvasHeight = 800;
  painter: Painter;

  private readonly backgroundColor = 'rgba(255,251,202,0.91)';

  constructor(private canvasUtilService: CanvasUtilService) {
  }

  ngAfterViewInit(): void {
    const mainCanvas = this.canvasUtilService.getCanvas('main_canvas');
    this.painter = new Painter(mainCanvas, this.canvasWidth, this.canvasHeight, this.backgroundColor);
    this.draw();
  }

  renderEvent(settings: RenderSettings) {
    this.draw();
  }

  private draw() {
    const primitives: Array<Primitive> = [];
    primitives.push(new Point(10, 10, 10));
    this.painter.draw(primitives);
  }
}
