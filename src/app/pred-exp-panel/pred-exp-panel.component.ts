import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Details } from '../prediction/prediction.component';

@Component({
  selector: 'app-pred-exp-panel',
  templateUrl: './pred-exp-panel.component.html',
  styleUrls: ['./pred-exp-panel.component.css']
})
export class PredExpPanelComponent implements OnInit {

  @Input() details: Details;
  @Output() deleteId = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteId.emit(this.details.id);
  }

}
