import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'token': localStorage.getItem('token')
    });
  }

  get() {
    return this.http.get(endpoint.concat('/prediction/'), { headers: this.headers });
  }

  delete(id: string) {
    return this.http.delete(endpoint.concat(`/prediction/${id}`), { headers: this.headers });
  }
}
