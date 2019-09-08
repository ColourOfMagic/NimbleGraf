import {Component, OnInit} from '@angular/core';
import {CanvasUtilService} from './utils/canvas-util';
import {Painter} from './painter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NimbleGraf';
  canvasWidth = 800;
  canvasHeight = 800;

  private readonly backgroundColor = 'rgba(255,251,202,0.91)';

  constructor(private canvasUtilService: CanvasUtilService) {
  }

  ngOnInit(): void {
    const mainCanvas = this.canvasUtilService.getCanvas('main_canvas');

    const painter = new Painter(mainCanvas, this.canvasWidth, this.canvasHeight);
    painter.draw(this.backgroundColor);
  }

}
