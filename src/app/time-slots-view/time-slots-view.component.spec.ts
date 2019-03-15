import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotsViewComponent } from './time-slots-view.component';

describe('TimeSlotsViewComponent', () => {
  let component: TimeSlotsViewComponent;
  let fixture: ComponentFixture<TimeSlotsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSlotsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
