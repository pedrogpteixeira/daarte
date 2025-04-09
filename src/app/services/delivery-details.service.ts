import {Injectable} from '@angular/core';
import {JwtService} from "./jwt.service";
import {environment} from "../environments/environment.prod";
import {DeliveryDetails} from "../models/delivery-details";

@Injectable({
  providedIn: 'root'
})
export class DeliveryDetailsService {

  constructor(private jwtService: JwtService) {
  }

  public async getUserDeliveryDetails(): Promise<DeliveryDetails[]> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const token = this.jwtService.getToken();
      if (!token) {
        console.warn('No authentication token found');
        return [];
      }
      const decodedToken = this.jwtService.decodeToken(token);

      const response = await fetch(environment.apiUrl + environment.orderEndpoint + environment.deliveryEndpoint + environment.userEndpoint + decodedToken.id, {
        method: 'GET',
        headers: headers
      });

      if (response.status === 404) {
        return [];
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  public async saveDeliveryDetails(deliveryDetails: DeliveryDetails): Promise<DeliveryDetails> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const token = this.jwtService.getToken();
      if (!token) {
        console.warn('No authentication token found');
        return deliveryDetails;
      }

      const response = await fetch(environment.apiUrl + environment.orderEndpoint + environment.deliveryEndpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          userId: deliveryDetails.userId,
          type: deliveryDetails.type,
          name: deliveryDetails.name,
          address: deliveryDetails.address,
          city: deliveryDetails.city,
          region: deliveryDetails.region,
          postalCode: deliveryDetails.postalCode,
          country: deliveryDetails.country,
          phone: deliveryDetails.phone,
          isPrimary: deliveryDetails.isPrimary
        })
      });

      if (response.status === 404) {
        return deliveryDetails;
      }

      return await response.json();
    } catch (error) {
      console.error('Error saving delivery details:', error);
      throw error;
    }
  }

  public async updateDeliveryDetails(deliveryDetails: DeliveryDetails): Promise<DeliveryDetails> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const token = this.jwtService.getToken();
      if (!token) {
        console.warn('No authentication token found');
        return deliveryDetails;
      }

      const response = await fetch(environment.apiUrl + environment.orderEndpoint + environment.deliveryEndpoint, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
          id: deliveryDetails.id,
          userId: deliveryDetails.userId,
          type: deliveryDetails.type,
          name: deliveryDetails.name,
          address: deliveryDetails.address,
          city: deliveryDetails.city,
          region: deliveryDetails.region,
          postalCode: deliveryDetails.postalCode,
          country: deliveryDetails.country,
          phone: deliveryDetails.phone,
          isPrimary: deliveryDetails.isPrimary
        })
      });

      if (response.status === 404) {
        return deliveryDetails;
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating delivery details:', error);
      throw error;
    }
  }

  public async deleteDeliveryDetails(id: string): Promise<void> {
    try {
      const headers = await this.jwtService.getAuthHeader();

      const response = await fetch(environment.apiUrl + environment.orderEndpoint + environment.deliveryEndpoint + id, {
        method: 'DELETE',
        headers: headers
      });

      if (response.status !== 200) {
        console.error('Error deleting delivery details:', response.statusText);
        return;
      }
    } catch (error) {
      console.error('Error deleting delivery details:', error);
      throw error;
    }
  }
}
