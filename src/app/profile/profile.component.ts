import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private email: string;

  constructor(private router: Router, private resultService: ResultService) {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.resultService.get().subscribe(
      x => {
        console.log(x);
      }, err => {
        console.log(err);
      }
    );
  }

  logout() {
    window.location.replace('/');
  }

}
