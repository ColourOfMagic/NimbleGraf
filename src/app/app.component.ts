import {AfterViewInit, Component} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';
import {Position, RenderSettings} from './model/base-model';
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
  settings: RenderSettings = {
    renderPosition: {
      position: Position.Front,
      offset: new Point(0, 0, 0),
      basePoint: new Point(0, 0, 0)
    },
    angles: {angleX: 0, angleY: 0, angleZ: 0},
    modelSettings: {
      height: 350,
      width: 200,
      length: 200,
      cylinderRadius: 50,
      quality: 20
    },
    transferParameters: {
      x: 400,
      y: 400,
      z: 400
    },
    scalingParameters: {
      x: 1,
      y: 1,
      z: 1
    },
    axonometricParameters: {
      use: false,
      psi: 45,
      varphi: 45
    },
    obliqueParameters: {
      use: false,
      l: 0.5,
      alpha: 15
    },
    perspectiveParameters: {
      use: false,
      d: -100
    }
  };

  private readonly backgroundColor = 'rgba(255,251,202,1)';
  private readonly parallelepipedColor = 'rgb(226,70,94)';
  private readonly cylinderColor = 'rgb(255,221,104)';

  ngAfterViewInit(): void {
    const mainCanvas = CanvasUtilService.getCanvas('main_canvas');
    this.painter = new Painter(mainCanvas, this.canvasWidth, this.canvasHeight, this.backgroundColor);
    this.draw(this.settings);
  }

  renderEvent(settings: RenderSettings) {
    this.draw(settings);
  }

  private draw(settings: RenderSettings) {
    const basePoint = settings.renderPosition.basePoint;
    const model = settings.modelSettings;
    const centerPoint = PrimitiveUtil.plusXYZ(basePoint, model.length / 2, 0, model.width / 2);
    const figures: BaseFigure[] = [];

    const parallelepiped = new Parallelepiped(basePoint, this.parallelepipedColor, model.length, model.width, model.height);
    const cylinder = new Cylinder(centerPoint, this.cylinderColor, model.height, model.cylinderRadius, model.quality);

    figures.push(cylinder);
    figures.push(parallelepiped);
    this.painter.draw(figures, settings);
  }
}
