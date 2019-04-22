import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSidenavModule, MatExpansionPanel } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
