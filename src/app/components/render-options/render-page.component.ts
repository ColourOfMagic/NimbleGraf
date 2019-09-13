import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RenderPosition, RenderSettings} from '../../model/base-model';

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

}
