import { Recursos } from './recursos.class';
import { LocalizacaoHelper } from './localizacao.helper';
import { IRecursos } from '../models/recursos.interface';

export class LocalizadoComponent {
  public recursos: IRecursos | any = Recursos;
  public localizacaoId: string = '';

  constructor () {
    console.log(this.recursos)
    this.localizacaoId = LocalizacaoHelper.getLocalizacaoAtual();
  }
}