import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule, MatSidenavModule, MatDialogModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HomeComponent,
    SnackbarComponent,
    ProfileComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [
    SnackbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
