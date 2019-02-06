import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../../sdk/models/common.dtos';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input()
  public note: Note;

  @Output()
  noteDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _notesService: NotesService) {
  }

  public deleteNote(noteId) {
    this._notesService.deleteNote(noteId);
    this.noteDelete.emit();
  }
}
