import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bruger-oprettelse',
  imports: [FormsModule],
  templateUrl: './bruger-oprettelse.html',
  styleUrl: './bruger-oprettelse.css',
})
export class BrugerOprettelse {
  navn: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router) {}

  opretBruger() {
    // Hent eksisterende brugere fra localStorage
    const eksisterende = localStorage.getItem('brugere');
    const brugere: any[] = eksisterende ? JSON.parse(eksisterende) : [];

    // Tjek om email allerede er i brug
    const emailFindes = brugere.some(b => b.email === this.email);
    if (emailFindes) {
      alert('En bruger med denne email findes allerede!');
      return;
    }

    // Lav ny bruger med unikt id
    const nyBruger = {
      id: brugere.length + 1,
      navn: this.navn,
      email: this.email,
      password: this.password
    };

    brugere.push(nyBruger);

    // Gem alle brugere tilbage som JSON
    localStorage.setItem('brugere', JSON.stringify(brugere));

    console.table(nyBruger);
    console.table(brugere);

    // Nulstil felter
    this.navn = '';
    this.email = '';
    this.password = '';

    this.router.navigate(['']);
  }
}