import { StatusDeputado } from './status-deputado.model';

export class Deputado {
  cpf: string;
  dataFalecimento: string;
  dataNascimento: string;
  escolaridade: string;
  id: number;
  municipioNascimento: string;
  nomeCivil: string;
  redeSocial: [string];
  sexo: string;
  ufNascimento: string;
  ultimoStatus: StatusDeputado;
  uri: string;
  urlWebsite: string;
}
