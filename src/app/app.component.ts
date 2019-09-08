import {AfterViewInit, Component} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';
import {RenderPosition, RenderSettings} from './model/base-model';
import {Point} from './model/primitive/primitive.model';
import {Parallelepiped} from './model/figure/parallelepiped';

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
  private readonly blackColor = 'rgb(0, 0, 0)';

  ngAfterViewInit(): void {
    const mainCanvas = CanvasUtilService.getCanvas('main_canvas');
    this.painter = new Painter(mainCanvas, this.canvasWidth, this.canvasHeight, this.backgroundColor);
    const settings = {
      position: RenderPosition.Front
    };
    this.draw(settings);
  }

  renderEvent(settings: RenderSettings) {
    this.draw(settings);
  }

  private draw(settings: RenderSettings) {
    const basePoint = new Point(150, 150, 150);

    const parallelepiped = new Parallelepiped(basePoint, this.blackColor, 150, 50, 100);
    this.painter.draw(parallelepiped.getPrimitives(), settings);
  }
}
