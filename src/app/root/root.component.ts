import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from '../root.service';

export interface SignInCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  private sign: boolean;
  private usernameValid: boolean;
  private usernameValidShow: boolean;
  private signin: SignInCredentials;
  private signup: SignUpCredentials;
  private errortext: string;
  private showError: boolean;
  private showLoader: boolean;
  private successtext: string;
  private showSuccess: boolean;
  private showPassword: boolean;
  constructor(private router: Router, private rootService: RootService) {
    this.sign = true;
    this.usernameValid = false;
    this.usernameValidShow = false;
    this.showLoader = false;
    this.showError = false;
    this.showSuccess = false;
    this.showPassword = false;
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
  }

  ngOnInit() {
    localStorage.clear();
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  signTrue() {
    this.sign = true;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
    this.usernameValidShow = false;
    this.showPassword = false;

  }
  signFalse() {
    this.sign = false;
    this.showError = false;
    this.showSuccess = false;
    this.errortext = '';
    this.successtext = '';
    this.signup = <SignUpCredentials>{};
    this.signin = <SignInCredentials>{};
    this.usernameValidShow = false;
    this.showPassword = false;
  }

  signIn() {
    this.showError = false;
    this.rootService.signIn(this.signin)
      .subscribe(
        x => {
          localStorage.setItem('username', this.signin.username);
          // console.log(x);
          localStorage.setItem('token', x['token']);
          console.log(x['token']);
          // localStorage.setItem('email', x['email']);
          this.router.navigate(['/home']);
        },
        err => {
          if (err.status === 403) {
            this.errortext = 'Incorrect username or password';
            this.showError = true;
          } else {
            this.errortext = 'Could not connect to server';
            this.showError = true;
          }
        }
      );
  }
  signUp() {
    this.showSuccess = false;
    this.rootService.signUp(this.signup)
      .subscribe(
        x => {
          this.successtext = 'Account successfully created.';
          this.showSuccess = true;
          // console.log(x);
        },
        err => {
          if (err.status === 409) {
            this.errortext = 'An account already exists with this email id.';
            this.showError = true;
          } else {
            this.errortext = 'Account could not be created. Please try again';
            this.showError = true;
          }
        }
      );
  }
  validateUsername() {
    if (this.signup.username != null && this.signup.username !== '') {
      this.showLoader = true;
      if (this.signup.username != null && this.signup.username.length !== 0) {
        this.rootService.validateUsername(this.signup.username)
          .subscribe(
            x => {
              console.log('Response received');
              this.usernameValid = true;
              this.usernameValidShow = true;
              this.showLoader = false;
            },
            err => {
              this.usernameValid = false;
              this.usernameValidShow = true;
              this.showLoader = false;
            });
      }
    } else {
      this.usernameValidShow = false;
      this.showLoader = false;
    }
  }
}
