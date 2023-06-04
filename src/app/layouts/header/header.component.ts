import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private translate: TranslateService) {
    // intencional
  }

  public alteralocale(lang: string, currency: string): void {
    this.translate.setDefaultLang(lang);
    /* sessionStorage.setItem('locale_id', lang);
    sessionStorage.setItem('currency_code', currency);
    window.location.reload(); */
  }

}
