import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogLibService {
  private _logCount = 0;

  constructor() {}

  log(message: string) {
    console.log(`LogLibService: ${this._logCount}`, message);
    this._logCount++;
  }
}
