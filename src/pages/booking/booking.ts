import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/user.service';
import { BookingService, ClassBooking } from '../../app/booking.service';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  classes: ClassBooking[] = [];
  currentUserEmail: string = '';

  constructor(
    private bookingService: BookingService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.getCurrentUserEmail();
  }

  loadClasses(): void {
    this.classes = this.bookingService.getClasses();
  }

  getCurrentUserEmail(): void {
    const users = this.userService.getUsers();
    if (users.length > 0) {
      this.currentUserEmail = users[0].email;
    }
  }

  bookClass(classId: string): void {
    if (!this.currentUserEmail) {
      return;
    }

    const success = this.bookingService.bookClass(classId, this.currentUserEmail);
    this.loadClasses();
  }

  cancelBooking(classId: string): void {
    if (!this.currentUserEmail) return;

    const success = this.bookingService.cancelBooking(classId, this.currentUserEmail);
    this.loadClasses();
  }

  isUserBooked(classId: string): boolean {
    return this.bookingService.isUserBooked(classId, this.currentUserEmail);
  }

  getAvailableSpots(classItem: ClassBooking): number {
    return classItem.maxCapacity - classItem.bookedUsers.length;
  }

  isClassFull(classItem: ClassBooking): boolean {
    return classItem.bookedUsers.length >= classItem.maxCapacity;
  }
}