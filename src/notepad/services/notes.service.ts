import { Injectable } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';
import { Note, Notepad } from '../../sdk/models/common.dtos';

@Injectable()
export class NotesService {
  private readonly NOTES: string;
  private readonly NOTEPAD: string;

  constructor(private _storage: StorageService) {
    this.NOTES = 'NOTES';
    this.NOTEPAD = 'NOTEPAD';
  }

  getNotepad(): Notepad {
    return this._storage.getItem(this.NOTEPAD) as Notepad;
  }

  getNotes(): Note[] {
    return this._storage.getItem(this.NOTES, true) as Note[];
  }

  addNote(note: Note): void {
    // TODO: maybe caching notes instead ?
    const allNotes = this.getNotes();
    allNotes.push(note);
    return this._storage.setItem(this.NOTES, allNotes);
  }

  saveNotepad(notepad: Notepad, notes: Note[]): void {
    this._storage.setItem(this.NOTEPAD, notepad);
    this._storage.setItem(this.NOTES, notes);
  }

  deleteNotepad(): void {
    this._storage.removeItem(this.NOTES);
    this._storage.removeItem(this.NOTEPAD);
  }

  deleteNote(noteId: number): void {
    const allNotes = this.getNotes();

    const idx = allNotes.findIndex(note => note.id === noteId);
    allNotes.splice(idx, 1);

    return this._storage.setItem(this.NOTES, allNotes);
  }
}

