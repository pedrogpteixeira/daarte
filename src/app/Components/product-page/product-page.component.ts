import {Component, OnInit} from '@angular/core';
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
export class ProductPageComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  productImages = productImages;

  currentImageIndex = 0;
  quantity = 1;
  openSection: string | null = "how";
  isImageLoaded = false;

  similarProducts: Product[] = similarProducts;

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

  onImageLoad() {
    this.isImageLoaded = true;
  }
}
