import {Component, Input} from '@angular/core';
import {Product} from "../../../../utils/mockData";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "../../product-page/product-card/product-card.component";

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductCardComponent
  ],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  @Input() products: Product[] = []; // Input for products
  @Input() loading: boolean = false; // Input for loading state
}
