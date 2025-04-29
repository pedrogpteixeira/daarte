import {Injectable} from '@angular/core';
import {environment} from "../environments/environment.prod";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public async getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(environment.apiUrl + environment.productEndpoint + environment.categoryEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
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
}
