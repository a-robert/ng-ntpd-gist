import { Component } from '@angular/core';

import { Note, Notepad } from '../../sdk/models/common.dtos';
import { NotesService } from '../services/notes.service';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent {
  public notepad: Notepad;
  public newNote: Note;
  public notes: Note[];

  constructor(private _notesService: NotesService) {
    this._fetchNotepad();
    this._resetNewNote();
    this._fetchNotes();
  }

  public addNote(note: Note): void {
    if (!note.title || !note.description) {
      console.error('Note need to have title and description');
      return;
    }

    this._notesService.addNote(note);
    this._resetNewNote();
    this._fetchNotes();
  }

  public onNoteDelete(): void {
    this._fetchNotes();
  }

  public saveNotepadState(): void {
    this._notesService.saveNotepad(this.notepad, this.notes);
  }

  public resetNotepadState(): void {
    this._notesService.deleteNotepad();
    this._fetchNotepad();
    this._fetchNotes();
  }

  private _resetNewNote(): void {
    this.newNote = {
      id: UtilService.generateRandomId(),
      title: '',
      description: ''
    };
  }

  // FIXME (TODO): fetch notepad and notes should be with one call
  // need to refactored in order to improve performance
  private _fetchNotepad(): void {
    this.notepad = this._notesService.getNotepad() || {title: ''};
  }

  private _fetchNotes(): void {
    this.notes = this._notesService.getNotes() || [];
  }
}
