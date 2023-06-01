import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layouts/header/header.module';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
        useFactory: httpLoaderFactory,
        deps: [ HttpClient ],
      }
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
