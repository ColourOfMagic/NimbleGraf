import {NgModule} from '@angular/core';
import {RenderPageComponent} from './render-page.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RenderPageComponent
  ],
  imports: [
    NgbAlertModule
  ],
  providers: [],
  exports: [
    RenderPageComponent
  ]
})
export class RenderPageModule {
}
