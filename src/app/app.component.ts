import {AfterContentInit, Component} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';
import {RenderSettings} from './model/base-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  canvasWidth = 800;
  canvasHeight = 800;
  painter: Painter;

  private readonly backgroundColor = 'rgba(255,251,202,0.91)';

  constructor(private canvasUtilService: CanvasUtilService) {
  }

  ngAfterContentInit(): void {
    const mainCanvas = this.canvasUtilService.getCanvas('main_canvas');
    this.painter = new Painter(mainCanvas, this.canvasWidth, this.canvasHeight, this.backgroundColor);
    window.requestAnimationFrame(() => this.painter.clearCanvas());
  }

  renderEvent(settings: RenderSettings) {
    this.painter.draw();
  }
}
