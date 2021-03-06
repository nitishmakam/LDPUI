import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule, MatSidenavModule, MatDialogModule, MatExpansionModule, MatIconModule, MatTooltipModule, MatSnackBarModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PredictionComponent } from './prediction/prediction.component';
import { ModalComponent } from './modal/modal.component';
import { ResultComponent } from './result/result.component';
import { PredExpPanelComponent } from './pred-exp-panel/pred-exp-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HomeComponent,
    SnackbarComponent,
    ProfileComponent,
    PredictionComponent,
    ModalComponent,
    ResultComponent,
    PredExpPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  entryComponents: [
    SnackbarComponent,
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
