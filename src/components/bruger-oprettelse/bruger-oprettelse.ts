import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  brugerId: number = 0;  
  brugere: any[] = [];   

  opretBruger() {
    this.brugerId++;  
    
    const nyBruger = {
      id: this.brugerId,
      navn: this.navn,
      email: this.email,
      password: this.password
    };
    
    this.brugere.push(nyBruger);
    
    console.table(nyBruger);  // Ren tabel format
    console.table(this.brugere);  // Alle brugere i tabel
    
    // Nulstil input felter
    this.navn = '';
    this.email = '';
    this.password = '';
  }
}
