import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { PageNotFoundComponent } from './not-found.component';

import { NotepadModule } from '../notepad/notepad.module';
import { StatsModule } from '../stats/stats.module';

const coreModules = [
  NgbModule,
  BrowserModule
];

const appModules = [
  NotepadModule,
  StatsModule
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    ...coreModules,
    ...appModules,
    AppRoutingModule // Must be last for proper routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
