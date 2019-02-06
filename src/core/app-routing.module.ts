import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTE_NOTEPAD } from '../notepad/notepad-routing.module';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', redirectTo: ROUTE_NOTEPAD, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
