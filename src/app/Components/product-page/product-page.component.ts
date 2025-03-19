import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProductCardComponent} from "./product-card/product-card.component";
import {MatIconModule} from '@angular/material/icon';
import {Product, productImages, similarProducts} from "../../../utils/mockData";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent,
    MatIconModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  productImages = productImages;

  currentImageIndex = 0;
  quantity = 1;
  openSection: string | null = "how";

  similarProducts: Product[] = similarProducts;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex === this.productImages.length - 1) ? 0 : this.currentImageIndex + 1;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex === 0) ? this.productImages.length - 1 : this.currentImageIndex - 1;
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  incrementQuantity() {
    this.quantity = Math.min(this.quantity + 1, 99);
  }

  decrementQuantity() {
    this.quantity = Math.max(this.quantity - 1, 1);
  }

  handleQuantityChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(value)) {
      this.quantity = Math.max(1, Math.min(value, 99));
    }
  }

  toggleSection(section: string) {
    this.openSection = (this.openSection === section) ? null : section;
  }
}
