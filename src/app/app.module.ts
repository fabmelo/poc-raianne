import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteDoisComponent } from './components/teste-dois/teste-dois.component';
import { TesteTresComponent } from './components/teste-tres/teste-tres.component';
import { TesteUmComponent } from './components/teste-um/teste-um.component';
import { TesteCincoComponent } from './pages/teste-cinco/teste-cinco.component';
import { TesteQuadroComponent } from './pages/teste-quadro/teste-quadro.component';
import { TesteSeisComponent } from './pages/teste-seis/teste-seis.component';
import { TemplatesModule } from './templates/templates.module';
import { MenuComponent } from './components/menu/menu.component';
import { EnviarDadosComponent } from './components/enviar-dados/enviar-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteUmComponent,
    TesteDoisComponent,
    TesteTresComponent,
    TesteQuadroComponent,
    TesteCincoComponent,
    TesteSeisComponent,
    MenuComponent,
    EnviarDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
