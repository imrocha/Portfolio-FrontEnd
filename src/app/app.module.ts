import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyPresentacionComponent } from './components/body-presentacion/body-presentacion.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { CertificacionComponent } from './components/certificacion/certificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyPresentacionComponent,
    RedesSocialesComponent,
    TrabajoComponent,
    TitulosComponent,
    CertificacionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
