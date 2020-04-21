import { TestBed } from '@angular/core/testing';

import { DeputadosService } from './deputados.service';
import { HttpClient } from '@angular/common/http';
import { HttpCamaraLegService } from 'src/app/shared/services/http-camara-leg.service';
import { asyncData } from 'src/app/shared/services/http-camara-leg.service.spec';
import { DeputadoItem } from '../models/deputado-item.model';

describe('DeputadosService', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    return TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: spy}
      ]
    });
  });

  it('should be created', () => {
    const service: DeputadosService = TestBed.get(DeputadosService);
    expect(service).toBeTruthy();
  });

  it('should execute req get', async () => {
    // tslint:disable-next-line:max-line-length
    const valueString = {"dados":[{"id":204554,"uri":"https://dadosabertos.camara.leg.br/api/v2/deputados/204554","nome":"Abílio Santana","siglaPartido":"PL","uriPartido":"https://dadosabertos.camara.leg.br/api/v2/partidos/37906","siglaUf":"BA","idLegislatura":56,"urlFoto":"https://www.camara.leg.br/internet/deputado/bandep/204554.jpg","email":"dep.abiliosantana@camara.leg.br"}],"links":[{"rel":"self","href":"https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=1&itens=15"},{"rel":"next","href":"https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=2&itens=15"},{"rel":"first","href":"https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=1&itens=15"},{"rel":"last","href":"https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=35&itens=15"}]};
    const returnValue: any[] = [{"id":204554,"uri":"https://dadosabertos.camara.leg.br/api/v2/deputados/204554","nome":"Abílio Santana","siglaPartido":"PL","uriPartido":"https://dadosabertos.camara.leg.br/api/v2/partidos/37906","siglaUf":"BA","idLegislatura":56,"urlFoto":"https://www.camara.leg.br/internet/deputado/bandep/204554.jpg","email":"dep.abiliosantana@camara.leg.br"}];

    const returnItens: any[] = [];
    returnValue.forEach((item) => {
      returnItens.push(DeputadoItem.fromJson(item));
    })


    const httpClientMock = TestBed.get(HttpClient) as jasmine.SpyObj<HttpClient>;
    const service: HttpCamaraLegService = TestBed.get(HttpCamaraLegService);
    const deputadosService: DeputadosService = new DeputadosService(service);
    httpClientMock.get.and.returnValue(asyncData(valueString));

    expect(await deputadosService.deputados()).toEqual(returnItens, 'return value expected');
    expect(httpClientMock.get.calls.count()).toBe(1, 'get method was called once');
  });
});
