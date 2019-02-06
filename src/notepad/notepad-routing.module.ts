import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotepadComponent } from './components/notepad.component';

export const ROUTE_NOTEPAD = 'notepad';

export const notepadRoutes: Routes = [{
  path: ROUTE_NOTEPAD, pathMatch: 'full', component: NotepadComponent
}];

@NgModule({
  imports: [RouterModule.forChild(notepadRoutes)],
  exports: [RouterModule],
  providers: []
})
export class NotepadRoutingModule {
}
