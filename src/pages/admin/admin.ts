import { Component } from '@angular/core';
import { BookingService } from '../../app/booking.service';
import { Router } from '@angular/router';
import { UserService, User } from '../../app/user.service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
    num: number = 0;
    users: User[] = [];

  constructor(private bookingService: BookingService) {}

  setNum(n: number) {
    this.num = n;
  }

  getTekst(): any {
    if (this.num === 1) return 'Dashboard';
    else if (this.num === 2) return 'Pages';
    else if (this.num === 3) return 'Admin';
    else if (this.num === 4) return 'Helpers';
    else if (this.num === 5) {this.router.navigate(['/database']); this.loadUsers();}
    else if (this.num === 6) return 'Config';
    else if (this.num === 7) return 'Api Tester';
    else if (this.num === 8) return 'Page Designer';
    else return 'Not working';
  }

  setMaxNum(num: number) {
    this.bookingService.setMaxNum(num);
  }
}
