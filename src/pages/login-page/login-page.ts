import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginBruger() {
    const data = localStorage.getItem('brugere');
    const brugere: any[] = data ? JSON.parse(data) : [];

    const bruger = brugere.find(
      b => b.email === this.email && b.password === this.password
    );

    if (bruger) {
      console.log('Login lykkedes:', bruger);
      this.router.navigate(['/booking']);
    } else {
      alert('Forkert email eller adgangskode!');
    }
  }

  opretBruger() {
    this.router.navigate(['/Oprettelse']);
  }
}