import { Injectable } from '@angular/core';

export interface User {
  id: number;
  navn: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'brugere';   // <-- ændret fra 'fitness_users'

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

    if (users.some(user => user.email === email)) {
      return false;
    }

    // Find næste id
    const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

    users.push({ id: nextId, navn, email, password });
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