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
    this.settings = {position: RenderPosition.Front};
  }

  get output(): string {
    return JSON.stringify(this.settings);
  }

  execute(): void {
    this.render.emit(this.settings);
  }

}
