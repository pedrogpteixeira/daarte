export interface DeliveryDetails {
  id: string;
  userId: string;
  type: string;
  name: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  isPrimary: boolean;
}
