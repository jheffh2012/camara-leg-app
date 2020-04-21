import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCamaraLegService {

  constructor(protected http: HttpClient) { }

  get = (url: string) => {
    return this.http.get(`${environment.api}${url}`, {
      headers: {
        accept: 'application/json'
      }
    });
  }
}
