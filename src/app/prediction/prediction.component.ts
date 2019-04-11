import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';
import { MatTooltipModule, MatDialog } from '@angular/material';
import { validateConfig } from '@angular/router/src/config';
import { ModalComponent } from '../modal/modal.component';

export class Details {
  name: string;
  EXT_SOURCE_1: number;
  EXT_SOURCE_2: number;
  EXT_SOURCE_3: number;
  DAYS_BIRTH: number;
  DAYS_EMPLOYED: number;
  AMT_ANNUITY: number;
  AMT_CREDIT: number;
  AMT_GOODS_PRICE: number;
  DAYS_ID_PUBLISH: number;
  DAYS_REGISTRATION: number;
  DAYS_LAST_PHONE_CHANGE: number;
  AMT_INCOME_TOTAL: number;
  OWN_CAR_AGE: number;
  REGION_POPULATION_RELATIVE: number;
  HOUR_APPR_PROCESS_START: number;
  AMT_REQ_CREDIT_BUREAU_YEAR: number;
  AMT_REQ_CREDIT_BUREAU_QRT: number;
  DEF_30_CNT_SOCIAL_CIRCLE: number;
  YEARS_BEGINEXPLUATATION_MODE: number;
  TOTALAREA_MODE: number;
  OBS_60_CNT_SOCIAL_CIRCLE: number;
  OBS_30_CNT_SOCIAL_CIRCLE: number;
  BASEMENTAREA_MODE: number;
  NAME_CONTRACT_TYPE: number;   // Drop down /radio // was cash loans
  REGION_RATING_CLIENT_W_CITY: number;
  APARTMENTS_MODE: number;
  LANDAREA_AVG: number;
  BASEMENTAREA_AVG: number;
  DEF_60_CNT_SOCIAL_CIRCLE: number;
  CODE_GENDER: string; // Radio
  LANDAREA_MODE: number;
  AMT_REQ_CREDIT_BUREAU_MON: number;
  YEARS_BEGINEXPLUATATION_MEDI: number;
  REG_CITY_NOT_LIVE_CITY: number; // Radio
  NONLIVINGAREA_MEDI: number;
  LANDAREA_MEDI: number;
  BASEMENTAREA_MEDI: number;
  COMMONAREA_MEDI: number;
  YEARS_BEGINEXPLUATATION_AVG: number;
  OCCUPATION_TYPE: number;  // Dropdown // Low skill labourers
  LIVINGAREA_MEDI: number;
  CNT_FAM_MEMBERS: number;
}
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  private details: Details;
  private dialogOpened: boolean;

  private pred1: number;
  private pred2: number;
  private pred3: number;
  private prediction: number;
  private showResult: boolean;
  constructor(private predService: PredictionService, public dialog: MatDialog) {
    this.details = new Details();
    this.dialogOpened = false;
    this.showResult = false;
  }

  ngOnInit() {
  }



  generate() {
    console.log(this.details);
    if (this.validate() === false) {
      return;
    }
    this.predService.generate(this.details).subscribe(x => {
      console.log(x);
      this.pred1 = x['p1'];
      this.pred2 = x['p2'];
      this.pred3 = x['p3'];
      this.prediction = x['prediction'];
      this.showResult = true;
    },
      err => {
        console.log(err);
      });
  }

  validate() {
    if (Object.keys(this.details).length < 42) {
      this.openDialog();
      return false;
    }
    return true;
  }

  openDialog() {

    if (!this.dialogOpened) {
      this.dialogOpened = !this.dialogOpened;
      const dialogRef = this.dialog.open(ModalComponent,
        {
          height: '0px',
          width: '0px',
          data: 'One or more fields are empty'
        });
      dialogRef.afterClosed().subscribe(x => {
        this.dialogOpened = false;
      });
    }
  }
}
