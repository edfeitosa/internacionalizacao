import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// localizadores
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt'); // BRL: currency code

import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEn, 'en'); // USD: currency code

import localeEs from '@angular/common/locales/es-MX';
registerLocaleData(localeEs, 'es'); // MXN: currency code

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layouts/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [ HttpClient ],
      }
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: () => sessionStorage.getItem('locale_id') ? sessionStorage.getItem('locale_id') : 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useFactory: () => sessionStorage.getItem('currency_code') ? sessionStorage.getItem('currency_code') : 'BRL'
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
