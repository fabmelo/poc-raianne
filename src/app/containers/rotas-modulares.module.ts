import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageModuloUmComponent } from './pages/page-modulo-um/page-modulo-um.component';
import { RotasModularesRoutingModule } from './rotas-modulares.routing';

@NgModule({
  declarations: [
    PageModuloUmComponent
  ],
  exports: [
    PageModuloUmComponent
  ],
  imports: [
    RotasModularesRoutingModule,
    CommonModule
  ]
})
export class RotasModularesModule { }
