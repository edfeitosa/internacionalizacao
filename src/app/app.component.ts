import { Component } from '@angular/core';

import { LocalizadoComponent } from './I18N/localizado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LocalizadoComponent {
  
  constructor () {
    super();
  }

}
