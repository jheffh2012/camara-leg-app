import { Injectable } from '@angular/core';
import { HttpCamaraLegService } from '../../shared/services/http-camara-leg.service';
import { DeputadoItem } from '../models/deputado-item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {

  constructor(
    protected httpService: HttpCamaraLegService
  ) { }

  deputados = async () => {
    return await this.httpService.get('deputados?pagina=1&itens=15').pipe(
      map(this.jsonDataToResources.bind(this))
    ).toPromise();
  }

  protected jsonDataToResources(json: any): DeputadoItem[] {
    const { dados } = json;
    const resources: DeputadoItem[] = [];
    dados.forEach(resource => resources.push(DeputadoItem.fromJson(resource)));

    return resources;
  }
}
