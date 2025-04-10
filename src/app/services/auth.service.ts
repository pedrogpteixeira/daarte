import {Injectable} from '@angular/core';
import {environment} from "../environments/environment.prod";
import {RegisterData} from "../models/register-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public async signUp(data: RegisterData): Promise<void> {
    try {
      const response = await fetch(environment.apiUrl + environment.authEndpoint + 'signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          roleId: data.roleId
        })
      });

      if (response.status === 201) {
        const data = await response.json();
        this.storeToken(data.token);
        window.location.href = '/account/login';
      } else {
        const errorData = await response.json();
        window.location.href = '/home';
        alert(errorData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async signIn(email: string, password: string, rememberMe: boolean): Promise<void> {
    try {
      const response = await fetch(environment.apiUrl + environment.authEndpoint + 'signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          rememberMe
        })
      });

      if (response.status === 200) {
        const data = await response.json();
        this.storeToken(data.token);
        window.location.href = '/account';
      } else {
        const errorData = await response.json();
        alert(errorData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public isAuthenticated(): boolean {
    try {
      return localStorage.getItem('token') != null;
    } catch (e) {
      return false;
    }
  }

  logout(): void {
    this.clearLocalStorage();
    window.location.href = '/account/login';
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
