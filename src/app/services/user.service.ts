import {Injectable} from '@angular/core';
import {environment} from "../environments/environment.prod";
import {UserData} from "../models/user-data";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private jwtService: JwtService) {
  }

  public async getAllUsers(): Promise<UserData[]> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const response = await fetch(environment.apiUrl + environment.userEndpoint, {
        method: 'GET',
        headers: headers
      });

      if (response.status === 401) {
        return [];
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
