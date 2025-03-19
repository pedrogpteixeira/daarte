import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Product} from "../../../../utils/mockData";

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
  @Input() product: Product = {
    id: "",
    name: "",
    price: 0,
    category: "",
    mainImage: "",
    hoverImage: "",
    inStock: false,
  }

  changeImage(image: any, src: string) {
    image.src = src;
  }
}
