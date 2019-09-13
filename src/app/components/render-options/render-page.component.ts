import {Component, EventEmitter, Output} from '@angular/core';
import {RenderPosition, RenderSettings} from '../../model/base-model';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent {

  settings: RenderSettings;

  @Output() render: EventEmitter<RenderSettings> = new EventEmitter();

  constructor() {
    this.settings = {position: RenderPosition.Front, angles: {angleX: 0, angleY: 0, angleZ: 0}};
  }

  get output(): string {
    return JSON.stringify(this.settings);
  }

  execute(): void {
    this.render.emit(this.settings);
  }

}
