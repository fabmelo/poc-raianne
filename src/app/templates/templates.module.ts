import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
