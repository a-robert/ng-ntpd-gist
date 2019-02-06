import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

const coreModules = [
  NgbModule,
  BrowserModule
];

const appModules = [
];

@NgModule({
  declarations: [
    AppComponent
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
