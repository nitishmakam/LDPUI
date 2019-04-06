import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './prediction/prediction.component';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  generate(details: Details) {
    return this.http.post(endpoint.concat('/prediction/generate'), details);
  }
}
