import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './components/stats.component';

export const ROUTE_STATS = 'stats';

export const notepadRoutes: Routes = [{
  path: ROUTE_STATS, pathMatch: 'full', component: StatsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(notepadRoutes)],
  exports: [RouterModule],
  providers: []
})
export class StatsRoutingModule {
}
