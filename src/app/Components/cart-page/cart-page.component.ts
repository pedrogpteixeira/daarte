import {Component} from '@angular/core';
import {CartItemComponent} from "./cart-item/cart-item.component";

interface CartItem {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CartItemComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})

export class CartPageComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Premium Running Shoes',
      price: '$129.99',
      priceValue: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Sport Training Shoes',
      price: '$119.99',
      priceValue: 119.99,
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
      quantity: 1,
    }
  ];

  shipping = 9.99;

  updateQuantity(id: number, newQuantity: number) {
    this.cartItems = this.cartItems.map(item =>
      item.id === id ? {...item, quantity: newQuantity} : item
    );
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  get subtotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.priceValue * item.quantity, 0
    );
  }

  get total() {
    return this.subtotal + this.shipping;
  }
}
