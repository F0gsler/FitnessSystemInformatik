import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
    num: number = 0;

  setNum(num: number) {
    this.num = num;
  }

  getTekst(): string {
    if (this.num === 1) return 'Dashboard';
    else if (this.num === 2) return 'Pages';
    else if (this.num === 3) return 'Admin';
    else if (this.num === 4) return 'Helpers';
    else if (this.num === 5) return 'Media Manager';
    else if (this.num === 6) return 'Config';
    else if (this.num === 7) return 'Api Tester';
    else if (this.num === 8) return 'Page Designer';
    else return 'Not working';
  }
}
