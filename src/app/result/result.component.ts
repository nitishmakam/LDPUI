import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() pred1: number;
  @Input() pred2: number;
  @Input() pred3: number;
  @Input() prediction: number;
  constructor() { }

  ngOnInit() {
  }

}
