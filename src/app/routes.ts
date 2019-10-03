import { NeverComponent } from './never/never.component';
import { Routes } from '@angular/router';
import { HoursComponent } from './hours/hours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OccasionalComponent } from './occasional/occasional.component';
import { YearlyComponent } from './yearly/yearly.component';
import { RangebarComponent } from './rangebar/rangebar.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'hours',
    component: HoursComponent
  },
  {
    path: 'never',
    component: NeverComponent
  },
  {
    path: 'occasional',
    component: OccasionalComponent
  },
  {
    path: 'yearly',
    component: YearlyComponent
  },
  {
    path: 'rangebar',
    component: RangebarComponent
  }
];
