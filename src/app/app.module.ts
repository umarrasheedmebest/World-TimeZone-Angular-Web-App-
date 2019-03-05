import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MomentTimezoneModule} from 'angular-moment-timezone';
import {MomentModule} from 'angular2-moment';
import { Ng5SliderModule } from 'ng5-slider';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentTimezoneModule,
    MomentModule,
    Ng5SliderModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
