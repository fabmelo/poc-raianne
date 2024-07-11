import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteCincoComponent } from './pages/teste-cinco/teste-cinco.component';
import { TesteQuadroComponent } from './pages/teste-quadro/teste-quadro.component';
import { TesteSeisComponent } from './pages/teste-seis/teste-seis.component';
import { DefaultComponent } from './templates/default/default.component';

const routes: Routes = [

  // Rota base
  {
    path: '',
    redirectTo: 'rota-quatro',
    pathMatch: 'full',
  },

  // Rotas sem Template
  {
    path: 'rota-quatro',
    component: TesteQuadroComponent
  },
  {
    path: 'rota-cinco',
    component: TesteCincoComponent
  },
  {
    path: 'rota-seis',
    component: TesteSeisComponent
  },

  // Rota com Template
  {
    path: 'teste-modulo',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./containers/rotas-modulares.module').then((m) => m.RotasModularesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
