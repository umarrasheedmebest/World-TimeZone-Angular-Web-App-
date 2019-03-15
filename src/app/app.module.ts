import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MomentTimezoneModule} from 'angular-moment-timezone';
import {MomentModule} from 'angular2-moment';
import { Ng5SliderModule } from 'ng5-slider';
import { DatePipe } from '@angular/common';
import { TimeSlotsViewComponent } from './time-slots-view/time-slots-view.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TimeSlotsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentTimezoneModule,
    MomentModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [DatePipe],
  bootstrap: [TimeSlotsViewComponent]
})
export class AppModule { }
