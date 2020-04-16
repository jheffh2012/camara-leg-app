import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpCamaraLegService {

  constructor(protected http: HttpClient) { }

  get = async (url: string) => {
    return await this.http.get(url, {
      headers: {
        accept: 'application/json'
      }
    }).toPromise();
  }
}
