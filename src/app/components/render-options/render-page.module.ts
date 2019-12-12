import {NgModule} from '@angular/core';
import {RenderPageComponent} from './render-page.component';
import {NgbAlertModule, NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    RenderPageComponent
  ],
  imports: [
    NgbAlertModule,
    NgbButtonsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [
    RenderPageComponent
  ]
})
export class RenderPageModule {
}
