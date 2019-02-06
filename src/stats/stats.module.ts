import { NgModule } from '@angular/core';

import { StatsComponent } from './components/stats.component';
import { StatsRoutingModule } from './stats-routing.module';

@NgModule({
  imports: [
    StatsRoutingModule
  ],
  declarations: [StatsComponent]
})
export class StatsModule {
}
