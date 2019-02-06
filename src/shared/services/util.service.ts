import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public static generateRandomId(): number {
    return new Date().getTime();
  }
}
