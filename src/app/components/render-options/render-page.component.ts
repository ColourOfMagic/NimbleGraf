import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {RenderSettings} from '../../model/base-model';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent {

  @Input() settings: RenderSettings;
  @Output() render: EventEmitter<RenderSettings> = new EventEmitter();
  rotateStep: number;

  // Panels
  public rotatePanel = false;
  public scalingPanel = false;

  constructor() {
    this.rotateStep = 4;
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
