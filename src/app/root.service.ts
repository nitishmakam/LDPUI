import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInCredentials } from './root/root.component';
import { SignUpCredentials } from './root/root.component';

declare let endpoint: any;
@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  signIn(signInCredentials: SignInCredentials) {
    return this.http.post(endpoint.concat('/users/login'), signInCredentials);
  }
  signUp(signUpCredentials: SignUpCredentials) {
    return this.http.post(endpoint.concat('/users/register'), signUpCredentials);
  }

  validateUsername(username: string) {
    return this.http.get(endpoint.concat(`/users/usernameExists/${username}`));
  }
}
