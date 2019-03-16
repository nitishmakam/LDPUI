import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'token': localStorage.getItem('token')
    });
  }
  try() {
    return this.http.get(endpoint.concat('/prediction/'), { headers: this.headers });
  }
}
