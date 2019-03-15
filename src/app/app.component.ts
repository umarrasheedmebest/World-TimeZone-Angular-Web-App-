import { Component, NgZone } from '@angular/core';
import * as moment from 'moment-timezone';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Options } from 'ng5-slider';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World Clock';
  value: number;
  newDate = new Date();
  zoneName: any;
  currentZoneOffset: any;
  newdatepipe: DatePipe
  options: Options = {
    floor: this.getStartDate(),
    ceil: this.getEndDate(),
    // step: 1,
    // showTicks: true,
    // showTicksValues: true,
    translate: (value: number): string => {
      return this.convertToTime(value) + '<br><span style="font-size: 0.8em">Local Time</span>';
    }
  };
  localTime: any;
  honolulu: any;
  pst: any;
  mst: any;
  cst: any;
  est: any;
  rdj: any;
  utc: any;
  london: any;
  berlin: any
  mascow: any;
  dubai: any;
  karachi: any;
  mumbai: any;
  beijing: any;
  singapore: any;
  tokoyo: any;
  sydney: any;
  aucklend: any;
  myDate: Date;
  currentTime: any;
  zoneOffset: any;
  public now: Date = new Date();
  currentDateTime: any;
  marchSecondSunday: any;
  novFirstSunday: any;
  isDayLightSaving: boolean = false;
  constructor(public datepipe: DatePipe) {
    this.showCurrentTime();
    this.value = + new Date();
    this.zoneOffset = moment().format("Z");
    let dateObj = new Date();
    this.currentDateTime = dateObj.getTime();
    let year = dateObj.getUTCFullYear();
    this.marchSecondSunday = (new Date(year + '-' + 3 + '-' + this.sundaysInMonth(11, year)[1])).getTime();
    this.novFirstSunday = (new Date(year + '-' + 11 + '-' + this.sundaysInMonth(11, year)[0])).getTime();
    this.timeChange();
  }

  getStartDate() {
    var start = new Date();
    start.setHours(0, 0, 0, 0);
    return +start;
  }

  getEndDate() {
    var start = new Date();
    start.setHours(23, 59, 59, 999);
    return +start;
  }

  showCurrentTime() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  convertToTime(val) {
    return this.datepipe.transform(val, 'hh:mm a');
  }

  timeChange() {
    if (this.currentDateTime >= this.marchSecondSunday && this.currentDateTime <= this.novFirstSunday) {
      console.log('DayLight savings');
      this.isDayLightSaving = true;
      this.pst = moment(this.value).utcOffset('-07:00').format('YYYY-MM-DD HH:mm');
      this.mst = moment(this.value).utcOffset('-06:00').format('YYYY-MM-DD HH:mm');
      this.cst = moment(this.value).utcOffset('-05:00').format('YYYY-MM-DD HH:mm');
      this.est = moment(this.value).utcOffset('-04:00').format('YYYY-MM-DD HH:mm');
    } else {
      this.pst = moment(this.value).utcOffset('-08:00').format('YYYY-MM-DD HH:mm');
      this.mst = moment(this.value).utcOffset('-07:00').format('YYYY-MM-DD HH:mm');
      this.cst = moment(this.value).utcOffset('-06:00').format('YYYY-MM-DD HH:mm');
      this.est = moment(this.value).utcOffset('-05:00').format('YYYY-MM-DD HH:mm');
      this.isDayLightSaving = false;
    }
    this.honolulu = moment(this.value).utcOffset('-10:00').format('YYYY-MM-DD HH:mm');
    this.rdj = moment(this.value).utcOffset('-03:00').format('YYYY-MM-DD HH:mm');
    this.utc = moment(this.value).utcOffset('+00:00').format('YYYY-MM-DD HH:mm');
    this.london = moment(this.value).utcOffset('+00:00').format('YYYY-MM-DD HH:mm');
    this.berlin = moment(this.value).utcOffset('+01:00').format('YYYY-MM-DD HH:mm');
    this.mascow = moment(this.value).utcOffset('+03:00').format('YYYY-MM-DD HH:mm');
    this.dubai = moment(this.value).utcOffset('+04:00').format('YYYY-MM-DD HH:mm');
    this.karachi = moment(this.value).utcOffset('+05:00').format('YYYY-MM-DD HH:mm');
    this.mumbai = moment(this.value).utcOffset('+05:30').format('YYYY-MM-DD HH:mm');
    this.beijing = moment(this.value).utcOffset('+08:00').format('YYYY-MM-DD HH:mm');
    this.singapore = moment(this.value).utcOffset('+08:00').format('YYYY-MM-DD HH:mm');
    this.tokoyo = moment(this.value).utcOffset('+09:00').format('YYYY-MM-DD HH:mm');
    this.sydney = moment(this.value).utcOffset('+11:00').format('YYYY-MM-DD HH:mm');
    this.aucklend = moment(this.value).utcOffset('+13:00').format('YYYY-MM-DD HH:mm');

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
