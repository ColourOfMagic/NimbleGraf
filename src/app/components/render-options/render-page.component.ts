import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RenderSettings} from '../../model/base-model';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent implements OnChanges {

  @Input() settings: RenderSettings;
  @Output() render: EventEmitter<RenderSettings> = new EventEmitter();
  rotateStep: number;

  // Panels
  public rotatePanel = false;

  constructor() {
    this.rotateStep = 4;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('!!!!111');
  }

  get output(): string {
    return JSON.stringify(this.settings);
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
