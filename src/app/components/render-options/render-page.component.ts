import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {RenderSettings} from '../../model/base-model';
import {MotionService, Shift} from '../../service/motion.service';
import {CanvasUtilService} from '../../utils/canvas-util';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent implements AfterViewInit {

  @Input() settings: RenderSettings;
  @Output() render: EventEmitter<RenderSettings> = new EventEmitter();

  // Panels
  public rotatePanel = false;
  public scalingPanel = false;

  private rotateStep = 4;
  private motionService: MotionService;

  ngAfterViewInit(): void {
    const mainCanvas = CanvasUtilService.getCanvas('main_canvas');
    this.motionService = new MotionService(mainCanvas, 0.1);
    this.motionService.changed.subscribe((shift: Shift) => {
      this.settings.angles.angleY += shift.y;
      this.settings.angles.angleX += shift.x;
      this.execute();
    });
  }

  get output(): string {
    return JSON.stringify(this.settings);
  }

  get commonScale(): number {
    return this.settings.scalingParameters.x;
  }

  set commonScale(num: number) {
    this.settings.scalingParameters.x = num;
    this.settings.scalingParameters.y = num;
    this.settings.scalingParameters.z = num;
  }

  execute(): void {
    this.render.emit(this.settings);
  }

  move(dir: Axes, multiplier: number) {
    const step = multiplier * this.rotateStep;
    switch (dir) {
      case Axes.X:
        this.settings.angles.angleX += step;
        break;
      case Axes.Y:
        this.settings.angles.angleY += step;
        break;
      case Axes.Z:
        this.settings.angles.angleZ += step;
        break;
    }
    this.execute();
  }
}

export enum Axes {
  X,
  Y,
  Z
}
