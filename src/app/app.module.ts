import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './routes';
import { FormsModule }   from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NeverComponent } from './never/never.component';
import { OccasionalComponent } from './occasional/occasional.component';
import { HoursComponent } from './hours/hours.component';
import { YearlyComponent } from './yearly/yearly.component';
import { RangebarComponent } from './rangebar/rangebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NeverComponent,
    OccasionalComponent,
    HoursComponent,
    YearlyComponent,
    RangebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng5SliderModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
