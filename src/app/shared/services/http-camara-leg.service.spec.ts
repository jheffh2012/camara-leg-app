import { TestBed } from '@angular/core/testing';

import { HttpCamaraLegService } from './http-camara-leg.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { map } from 'rxjs/operators';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('HttpCamaraLegService', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    return TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: spy}
      ]
    });
  });

  it('should be created', () => {
    const service: HttpCamaraLegService = TestBed.get(HttpCamaraLegService);
    expect(service).toBeTruthy();
  });

  it('should execute req get', async () => {
    const returnValue = {value: true};
    const httpClientMock = TestBed.get(HttpClient) as jasmine.SpyObj<HttpClient>;
    const service: HttpCamaraLegService = TestBed.get(HttpCamaraLegService);
    httpClientMock.get.and.returnValue(asyncData(returnValue));

    expect(await service.get('').toPromise()).toBe(returnValue, 'return value expected');
    expect(httpClientMock.get.calls.count()).toBe(1, 'get method was called once');
  });
});
