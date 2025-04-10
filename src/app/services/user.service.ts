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

  public async getUserById(): Promise<UserData> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const token = this.jwtService.getToken();
      if (!token) {
        console.warn('No authentication token found');
        return {} as UserData;
      }

      const decodedToken = this.jwtService.decodeToken(token);

      const response = await fetch(environment.apiUrl + environment.userEndpoint + decodedToken.id, {
        method: 'GET',
        headers: headers
      });

      if (response.status === 404) {
        return Promise.reject('User not found');
      }

      return await response.json();
    } catch (error) {
      console.error('Error saving delivery details:', error);
      throw error;
    }
  }

  public async updateUser(user: UserData): Promise<UserData> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const response = await fetch(environment.apiUrl + environment.userEndpoint, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          roleId: user.roleId
        })
      });

      if (!response.ok) {
        return Promise.reject('Failed to update user');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
}
