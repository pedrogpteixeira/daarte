import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: { name: string, price: string, image: string, image2: string, goto: string } = {
    name: '',
    price: '',
    image: '',
    image2: '',
    goto: ''
  };

  changeImage(image: any, src: string) {
    image.src = src;
  }
}
