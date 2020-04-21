import { BaseModel } from '../../shared/models/base.model';

export class DeputadoItem extends BaseModel {
  email: string;
  id: number;
  idLegislatura: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;

  static fromJson(jsonData: any): DeputadoItem {
    return Object.assign(new DeputadoItem(), jsonData);
  }
}
