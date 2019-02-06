import { NgModule } from '@angular/core';

import { StatsComponent } from './components/stats.component';
import { StatsRoutingModule } from './stats-routing.module';

import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    StatsRoutingModule,
    ChartModule
  ],
  declarations: [StatsComponent]
})
export class StatsModule {
}
