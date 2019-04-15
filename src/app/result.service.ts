import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from './prediction/prediction.component';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'token': localStorage.getItem('token')
    });
  }

  save(details: Details) {
    return this.http.post(endpoint.concat('/prediction/save'), details, { headers: this.headers });
  }
  get() {
    return this.http.get(endpoint.concat('/prediction/'), { headers: this.headers });
  }

}
