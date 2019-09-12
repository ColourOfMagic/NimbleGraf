import {AfterViewInit, Component} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';
import {RenderPosition, RenderSettings} from './model/base-model';
import {Point} from './model/primitive/primitive.model';
import {Parallelepiped} from './model/figure/parallelepiped';
import {BaseFigure} from './model/figure/base-figure';
import {Cylinder} from './model/figure/cylinder';
import {PrimitiveUtil} from './utils/primitive-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  canvasWidth = 800;
  canvasHeight = 800;
  painter: Painter;

  private readonly backgroundColor = 'rgba(255,251,202,1)';
  private readonly blackColor = 'rgb(0, 0, 0)';
  private readonly cylinderColor = 'rgb(101,255,110)';

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
    const centerPoint = PrimitiveUtil.plusXYZ(basePoint, 100, 0, 100);
    const figures: BaseFigure[] = [];

    const parallelepiped = new Parallelepiped(basePoint, this.blackColor, 200, 200, 350);
    const cylinder = new Cylinder(centerPoint, this.redColor, 350, 50, 10);

    figures.push(parallelepiped);
    figures.push(cylinder);
    this.painter.draw(figures, settings);
  }
}
