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
  title = 'PureLogics Clock';
  value: number;
  newDate = new Date();
  zoneName: any;
  currentZoneOffset: any;
  currentDate = this.datepipe.transform(this.newDate, 'yyyy-MM-dd');
  options: Options = {
    ariaLabel: 'High value',
    ariaLabelHigh: 'Testing',
    floor: (new Date(this.currentDate + 'T00:00:00.000Z')).getTime(),
    ceil: (new Date(this.currentDate + 'T23:59:59.000Z')).getTime()
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
  constructor(public datepipe: DatePipe) {
    let date = new Date();
    let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
    console.log('userStartTime', latest_date);
    this.showCurrentTime();
    this.value = + new Date();
    this.timeChange();
    this.zoneOffset = moment().format("Z");
  }

  showCurrentTime() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  timeChange() {
    this.localTime = moment(this.value).utcOffset('').format('hh:mm A');
    this.honolulu = moment(this.value).utcOffset('-10:00').format('hh:mm A');
    this.pst = moment(this.value).utcOffset('-08:00').format('hh:mm A');
    this.mst = moment(this.value).utcOffset('-07:00').format('hh:mm A');
    this.cst = moment(this.value).utcOffset('-06:00').format('hh:mm A');
    this.est = moment(this.value).utcOffset('-05:00').format('hh:mm A');
    this.rdj = moment(this.value).utcOffset('-03:00').format('hh:mm A');
    this.utc = moment(this.value).utcOffset('+00:00').format('hh:mm A');
    this.london = moment(this.value).utcOffset('+00:00').format('hh:mm A');
    this.berlin = moment(this.value).utcOffset('+01:00').format('hh:mm A');
    this.mascow = moment(this.value).utcOffset('+03:00').format('hh:mm A');
    this.dubai = moment(this.value).utcOffset('+04:00').format('hh:mm A');
    this.karachi = moment(this.value).utcOffset('+05:00').format('hh:mm A');
    this.mumbai = moment(this.value).utcOffset('+05:30').format('hh:mm A');
    this.beijing = moment(this.value).utcOffset('+08:00').format('hh:mm A');
    this.singapore = moment(this.value).utcOffset('+8:00').format('hh:mm A');
    this.tokoyo = moment(this.value).utcOffset('+09:00').format('hh:mm A');
    this.sydney = moment(this.value).utcOffset('+11:00').format('hh:mm A');
    this.aucklend = moment(this.value).utcOffset('+13:00').format('hh:mm A');
  }

  mouseEnter(zone) {
    // console.log(zone);
    // this.zoneName = zone;
    // let tooltipSpan = document.getElementById('tooltip-span');
    // fromEvent(document.body, 'mousemove').subscribe((e: any) => {
    //   var x = e.clientX,
    //     y = e.clientY;
    // tooltipSpan.style.top = (y - 10) + 'px';
    // tooltipSpan.style.left = (x - 50) + 'px';
    // })
  }

  resetTime() {
    this.value = + new Date();
    this.timeChange();
  }
}
