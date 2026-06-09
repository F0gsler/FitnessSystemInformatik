import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  holdnum: number = 2; // Default to 2 as per your test

  setMaxNum(num: number) {
    this.holdnum = num;
  }

  getHoldnum(): number {
    return this.holdnum;
  }
}