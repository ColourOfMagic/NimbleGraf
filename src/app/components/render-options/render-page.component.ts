import {Component} from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: 'render-page.component.html'
})
export class RenderPageComponent {

  get output(): string {
    return 'test output';
  }
}
