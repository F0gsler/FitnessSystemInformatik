import { Injectable } from '@angular/core';

export interface ClassBooking {
  id: string;
  name: string;
  maxCapacity: number;
  bookedUsers: string[]; // array af email adresser
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly STORAGE_KEY = 'bookinger';
  private classes: ClassBooking[] = [
    { id: 'yoga', name: 'Yoga', maxCapacity: 20, bookedUsers: [] },
    { id: 'spinning', name: 'Spinning', maxCapacity: 15, bookedUsers: [] },
    { id: 'styrketræning', name: 'Styrketræning', maxCapacity: 25, bookedUsers: [] },
    { id: 'zumba', name: 'Zumba', maxCapacity: 20, bookedUsers: [] },
  ];

  constructor() {
    this.loadBookings();
  }

  // Hent alle hold
  getClasses(): ClassBooking[] {
    return this.classes.map(c => ({ ...c, bookedUsers: [...c.bookedUsers] }));
  }

  // Hent specifikt hold
  getClass(classId: string): ClassBooking | undefined {
    return this.classes.find(c => c.id === classId);
  }

  // Book et hold
  bookClass(classId: string, userEmail: string): boolean {
    const classItem = this.getClass(classId);
    if (!classItem) return false;

    // Check hvis brugeren allerede har booket
    if (classItem.bookedUsers.includes(userEmail)) {
      return false;
    }

    // Check hvis der er plads
    if (classItem.bookedUsers.length >= classItem.maxCapacity) {
      return false;
    }

    classItem.bookedUsers.push(userEmail);
    this.saveBookings();
    return true;
  }

  // Afbook et hold
  cancelBooking(classId: string, userEmail: string): boolean {
    const classItem = this.getClass(classId);
    if (!classItem) return false;

    const index = classItem.bookedUsers.indexOf(userEmail);
    if (index === -1) return false;

    classItem.bookedUsers.splice(index, 1);
    this.saveBookings();
    return true;
  }

  // Check hvis bruger har booket
  isUserBooked(classId: string, userEmail: string): boolean {
    const classItem = this.getClass(classId);
    return classItem?.bookedUsers.includes(userEmail) || false;
  }

  // Få antal bookede
  getBookedCount(classId: string): number {
    const classItem = this.getClass(classId);
    return classItem?.bookedUsers.length || 0;
  }

  // Gem bookinger til localStorage
  private saveBookings(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.classes));
  }

  // Load bookinger fra localStorage
  private loadBookings(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      this.classes = JSON.parse(saved);
    }
  }
}