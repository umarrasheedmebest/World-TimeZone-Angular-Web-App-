import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-time-slots-view',
  templateUrl: './time-slots-view.component.html',
  styleUrls: ['./time-slots-view.component.scss']
})
export class TimeSlotsViewComponent implements OnInit {
  public now: Date = new Date();
  AllZoneTime = [];
  isDaylighSaving: boolean = false;
  currentDateTime: any;
  marchSecondSunday: any;
  novFirstSunday: any;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.AllZoneTime, event.previousIndex, event.currentIndex);
  }
  constructor() {
    this.timeChange();
    this.showCurrentTime();
  }

  timeChange() {
    let dateObj = new Date();
    this.currentDateTime = dateObj.getTime();
    let year = dateObj.getUTCFullYear();
    this.marchSecondSunday = (new Date(year + '-' + 3 + '-' + this.sundaysInMonth(11, year)[1])).getTime();
    this.novFirstSunday = (new Date(year + '-' + 11 + '-' + this.sundaysInMonth(11, year)[0])).getTime();
    if (this.currentDateTime >= this.marchSecondSunday && this.currentDateTime <= this.novFirstSunday) {
      this.isDaylighSaving = true;
    } else {
      this.isDaylighSaving = false;
    }
  }

  ngOnInit() {
    this.AllZoneTime = [{
      city: 'Islamabad',
      country: 'Pakistan',
      abr: 'PKT',
      offset1: '+5',
      offset2: +5
    },
    {
      city: 'Honolulu',
      country: 'UnitedStates',
      abr: 'EDT',
      offset1: '-10',
      offset2: -10
    },
    {
      city: 'Pacific Time',
      country: 'UnitedStates',
      abr: 'PDT',
      offset1: this.isDaylighSaving ? '-7' : '-8',
      offset2: this.isDaylighSaving ? -7 : -8
    }
    ];
  }

  getStartDate(offset, hr) {
    var time = new Date();
    time.setHours(hr, 59, 59, 999);
    return moment(+time).utcOffset(offset).format('h a');
  }

  showCurrentTime() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  convertTozoneTime(now, offset) {
    return moment(+now).utcOffset(offset).format('YYYY-MM-DD HH:mm');
  }

  sundaysInMonth(m, y) {
    var days = new Date(y, m, 0).getDate();
    var sundays = [8 - (new Date(m + '/01/' + y).getDay())];
    for (var i = sundays[0] + 7; i < days; i += 7) {
      sundays.push(i);
    }
    return sundays;
  }
}
