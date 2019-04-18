import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result.service';
import { MatExpansionPanel } from '@angular/material';
import { Details } from '../prediction/prediction.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private email: string;
  private details: Details[];

  constructor(private router: Router, private resultService: ResultService) {
    this.details = [];
  }

  ngOnInit() {
    this.resultService.get().subscribe(
      x => {
        console.log(x);
        this.details = x as Details[];
      }
    );
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  logout() {
    window.location.replace('/');
  }

}
