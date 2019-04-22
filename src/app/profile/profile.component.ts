import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatExpansionPanel } from '@angular/material';
import { Details } from '../prediction/prediction.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: string;
  private email: string;
  private details: Details[];

  constructor(private router: Router, private profileService: ProfileService) {
    this.details = [];
  }

  ngOnInit() {
    this.profileService.get().subscribe(
      x => {
        console.log(x);
        this.details = x as Details[];
      }
    );
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
  }

  delete(id: string, index: number) {
    this.profileService.delete(id).subscribe(
      x => {
        this.details.splice(index, 1);
      }
    );
  }

  logout() {
    window.location.replace('/');
  }

}
