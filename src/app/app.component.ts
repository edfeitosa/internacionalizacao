import { Component, LOCALE_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    translate: TranslateService,
    @Inject(LOCALE_ID) public locale: string
  ) {
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');
    translate.use('pt');

    console.log(locale)
  }
}
