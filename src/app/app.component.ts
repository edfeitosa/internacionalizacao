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
    console.log(locale);
    // this.setLocale();
    translate.setDefaultLang(locale);
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }

  /* private setLocale(): void {
    const locale_id: string | null = sessionStorage.getItem('locale_id');
    locale_id ? this.translate.setDefaultLang(locale_id) : this.translate.setDefaultLang('pt')
  } */

}

