import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RenderSettings} from '../../model/base-model';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent {

  @Input() settings: RenderSettings;
  @Output() render: EventEmitter<RenderSettings> = new EventEmitter();

  get output(): string {
    return JSON.stringify(this.settings);
  }

  execute(): void {
    this.render.emit(this.settings);
  }

  move(dir: Axes, multiplier: number) {
    const step = multiplier * 5;
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
