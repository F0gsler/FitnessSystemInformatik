import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../../app/user.service';

@Component({
  selector: 'app-databaseView',
  imports: [],
  templateUrl: './databaseView.html',
  styleUrl: './databaseView.css',
})
export class DatabaseView {

    constructor(private router: Router, private userService: UserService) {}
  

    num: number = 0;
    users: User[] = [];

  setNum(num: number) {
    this.num = num;
    this.getTekst();
  }

    ngOnInit(): void {
    this.loadUsers();
  }

    loadUsers(): void {
      this.users = this.userService.getUsers();
    }

  getTekst(): any {
    if (this.num === 1) {this.router.navigate(['/admin']);}
    else if (this.num === 2) {this.router.navigate(['/admin']);}
    else if (this.num === 3) {this.router.navigate(['/admin']);}
    else if (this.num === 4) {this.router.navigate(['/admin']);}
    else if (this.num === 5) {console.log('Database'); this.loadUsers();}
    else if (this.num === 6) {this.router.navigate(['/admin']);}
    else if (this.num === 7) {this.router.navigate(['/admin']);}
    else if (this.num === 8) {this.router.navigate(['/admin']);}
    else {console.log('Not working');}
}
}
