import { Injectable } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';
import { Note } from '../../sdk/models/common.dtos';

@Injectable()
export class NotesService {
  private readonly NOTES: string;

  constructor(private _storage: StorageService) {
    this.NOTES = 'NOTES';
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

  saveNote(note: Note): void {
    const allNotes = this.getNotes();

    // TODO: proper save mechanism
    allNotes.forEach((mNote) => {
      if (mNote.id === note.id) {
        mNote.title = note.title;
        mNote.description = note.description;
      }
    });

    return this._storage.setItem(this.NOTES, allNotes);
  }

  deleteNote(noteId: number): void {
    const allNotes = this.getNotes();

    const idx = allNotes.findIndex(note => note.id === noteId);
    allNotes.splice(idx, 1);

    return this._storage.setItem(this.NOTES, allNotes);
  }
}

