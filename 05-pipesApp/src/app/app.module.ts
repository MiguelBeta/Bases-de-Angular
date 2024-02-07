import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//Configuracion de la lengua(pais) local de la app
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-CA";


//Establece todos los idiomas locales que se quieren manejar, en este caso esHN
import { registerLocaleData } from "@angular/common";


registerLocaleData( localeEsHN );
registerLocaleData( localeFrCA );



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [
    //Define que igioma quiere trabajar la app
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
