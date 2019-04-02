import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSidenavModule, MatExpansionPanel } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from '../home.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

declare let endpoint: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private username: string;
  private email: string;
  private endpoint: string;

  constructor(private homeService: HomeService, private router: Router) {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.homeService.try().subscribe((data: any) => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  logout() {
    window.location.replace('/');
  }
}
