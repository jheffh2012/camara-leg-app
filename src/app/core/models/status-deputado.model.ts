import { Gabinete } from './gabinete.model';

export class StatusDeputado {
  condicaoEleitoral: string;
  data: string;
  descricaoStatus: string;
  email: string;
  gabinete: Gabinete;
  id: number;
  idLegislatura: number;
  nome: string;
  nomeEleitoral: string;
  siglaPartido: string;
  siglaUf: string;
  situacao: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;
}
