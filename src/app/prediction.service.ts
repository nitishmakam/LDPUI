import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from './prediction/prediction.component';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'token': localStorage.getItem('token')
    });
  }

  generate(details: Details) {
    return this.http.post(endpoint.concat('/prediction/generate'), details, { headers: this.headers });
  }
}
