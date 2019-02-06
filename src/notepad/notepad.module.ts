import { NgModule } from '@angular/core';

import { NotepadComponent } from './components/notepad.component';
import { NotepadRoutingModule } from './notepad-routing.module';

@NgModule({
  imports: [
    NotepadRoutingModule
  ],
  declarations: [NotepadComponent]
})
export class NotepadModule {
}
