import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() quantity: number = 0;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  decreaseQuantity() {
    this.quantityChange.emit(Math.max(0, this.quantity - 1));
  }

  increaseQuantity() {
    this.quantityChange.emit(this.quantity + 1);
  }
}
