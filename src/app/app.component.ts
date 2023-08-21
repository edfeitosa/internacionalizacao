import { Component } from '@angular/core';

import { LocalizacaoComponent } from './I18N/localizacao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LocalizacaoComponent {
  
  constructor () {
    super();
  }

}
