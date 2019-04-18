import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredExpPanelComponent } from './pred-exp-panel.component';

describe('PredExpPanelComponent', () => {
  let component: PredExpPanelComponent;
  let fixture: ComponentFixture<PredExpPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredExpPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredExpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
