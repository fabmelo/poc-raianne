import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModuloUmComponent } from './pages/page-modulo-um/page-modulo-um.component';

const routes: Routes = [
  {
    path: '',
    component: PageModuloUmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotasModularesRoutingModule { }
