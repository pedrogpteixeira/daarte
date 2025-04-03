import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  async getAuthHeader(): Promise<HeadersInit> {
    const token = this.getToken();

    if (!token) {
      console.warn('No authentication token found');
    }

    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  // Decodifica o token JWT
  decodeToken(token: string): any {
    try {
      const base64Url = token.split('.')[1];

      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      // Decodifica a string Base64
      const jsonPayload = decodeURIComponent(
        window.atob(base64)
          .split('')
          .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }

  isTokenExpired(token?: string): boolean {
    const decodedToken = this.decodeToken(token || this.getToken() || '');
    if (!decodedToken || !decodedToken.exp) return true;

    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate.valueOf() < new Date().valueOf();
  }
}
