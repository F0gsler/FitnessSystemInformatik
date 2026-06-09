import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../app/booking.service';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {

  deltagernum: number = 0;
  holdnum: number = 0;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.holdnum = this.bookingService.getHoldnum();
  }

  setMaxNum(holdnum: number) {
    this.bookingService.setMaxNum(holdnum);
    this.holdnum = holdnum;
  }

  setDeltagerPlads(){
    if (this.deltagernum >= this.holdnum){
      console.log("Holdet er fyldt");
    } else {
      this.deltagernum++;
    }
  }
}