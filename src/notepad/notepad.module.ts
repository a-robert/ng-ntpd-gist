import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NotesService } from './services/notes.service';

import { NotepadComponent } from './components/notepad.component';
import { NotepadRoutingModule } from './notepad-routing.module';

@NgModule({
  imports: [
    NotepadRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    NotesService
  ],
  declarations: [NotepadComponent]
})
export class NotepadModule {
}
