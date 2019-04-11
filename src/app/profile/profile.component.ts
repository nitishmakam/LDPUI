import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private email: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
  }

  logout() {
    window.location.replace('/');
  }

}
