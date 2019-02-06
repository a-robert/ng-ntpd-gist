import { Component } from '@angular/core';

import { Note } from '../../sdk/models/common.dtos';
import { NotesService } from '../services/notes.service';
import { UtilService } from '../../shared/services/util.service';

// import { ROUTE_STATS } from '../../stats/stats-routing.module';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent {
  public statsRoute: string;
  public notepadTitle: string;
  public newNote: Note;
  public notes: Note[];

  constructor(private _notesService: NotesService) {
    // this.statsRoute = `/${ROUTE_STATS}`;
    this._resetNewNote();
    this._fetchNotes();
  }

  public addNote(note: Note): void {
    this._notesService.addNote(note);
    this._resetNewNote();
    this._fetchNotes();
  }

  public deleteNote(noteId: number): void {
    this._notesService.deleteNote(noteId);
    this._fetchNotes();
  }

  private _resetNewNote(): void {
    this.newNote = {
      id: UtilService.generateRandomId(),
      title: '',
      description: ''
    };
  }

  private _fetchNotes(): void {
    this.notes = this._notesService.getNotes();
  }
}
