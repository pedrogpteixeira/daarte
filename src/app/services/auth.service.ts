import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public async signUp(firstName: string, lastName: string, email: string, password: string): Promise<void> {
    try {
      const response = await fetch(environment.apiUrl + environment.authEndpoint + 'signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          roleId: ' '
        })
      });

      if (response.status === 201) {
        const data = await response.json();
        this.storeToken(data.token);
        window.location.href = '/home';
      } else {
        alert('Invalid credentials');
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async isAuthenticated(): Promise<boolean> {
    try {
      return localStorage.getItem('token') !== null;
    } catch (e) {
      return false;
    }
  }

  public async logout(): Promise<void> {
    this.clearLocalStorage();
    window.location.href = '/home';
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
