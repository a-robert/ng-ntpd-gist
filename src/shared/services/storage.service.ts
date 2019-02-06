import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // TODO: better to find type for the storage.
  private _storage: any;

  constructor() {
    this._storage = window.localStorage;
  }

  public setItem(key: string, value: any): void {
    return this._storage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string, asArray: boolean = false): any {
    try {
      const item = JSON.parse(this._storage.getItem(key));

      return asArray ? (item ? [...item] : []) : item;
    } catch (e) {
      // Ideally this should never happen
      console.log(e);
    }
  }

  public removeItem(key: string): void {
    return this._storage.removeItem(key);
  }

  public cleanStorage(): void {
    return this._storage.clear();
  }
}
