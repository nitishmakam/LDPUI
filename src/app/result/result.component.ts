import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../prediction/prediction.component';
import { ResultService } from '../result.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() showSave: boolean;
  @Input() details: Details;
  private dialogOpened: boolean;
  constructor(private resultService: ResultService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.dialogOpened = false;
  }

  ngOnInit() {
  }

  save() {

    this.resultService.save(this.details).subscribe(
      x => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Successfully saved',
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.showSave = false;
      },
      err => {
        if (err.status === 403) {
          this.openDialog('Bad request.');
        } else {
          this.openDialog('Could not connect to server. Please try again later.');
        }
      }
    );
  }
  openDialog(msg: string) {

    if (!this.dialogOpened) {
      this.dialogOpened = !this.dialogOpened;
      const dialogRef = this.dialog.open(ModalComponent,
        {
          height: '0px',
          width: '0px',
          data: msg
        });
      dialogRef.afterClosed().subscribe(x => {
        this.dialogOpened = false;
      });
    }
  }

}
