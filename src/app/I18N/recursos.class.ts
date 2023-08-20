import { IRecursos } from '../models/recursos.interface';

export abstract class Recursos {
  // static [chave: string]: string;
  public static recursos: IRecursos;

  /* constructor (recursosLocalidade: IRecursos) {
    this._recursos = recursosLocalidade;
  } */

  get recursos(): IRecursos {
    return this.recursos;
  }
}