import {NgModule} from '@angular/core';
import {RenderPageComponent} from './render-page.component';
import {NgbAlertModule, NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RenderPageComponent
  ],
  imports: [
    NgbAlertModule,
    NgbButtonsModule,
    FormsModule
  ],
  providers: [],
  exports: [
    RenderPageComponent
  ]
})
export class RenderPageModule {
}
