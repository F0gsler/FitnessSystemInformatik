import { Injectable } from '@angular/core';

export interface User {
  navn: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'fitness_users';

  constructor() { }

  // Hent alle brugere fra localStorage
  getUsers(): User[] {
    const usersJson = localStorage.getItem(this.STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  // Gem alle brugere til localStorage
  private saveUsers(users: User[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  // Opret en ny bruger
  createUser(navn: string, email: string, password: string): boolean {
    const users = this.getUsers();

    // Tjek om email allerede eksisterer
    if (users.some(user => user.email === email)) {
      return false; // Bruger eksisterer allerede
    }

    // Tilføj ny bruger
    users.push({ navn, email, password });
    this.saveUsers(users);
    return true;
  }

  // Valider login
  validateLogin(email: string, password: string): User | null {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
  }

  // Tjek om email eksisterer
  emailExists(email: string): boolean {
    const users = this.getUsers();
    return users.some(user => user.email === email);
  }
}