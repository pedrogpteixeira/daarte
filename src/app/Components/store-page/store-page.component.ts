import {Component, OnInit} from '@angular/core';
import {Product, products} from "../../../utils/mockData";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterSideBarComponent} from "./filter-side-bar/filter-side-bar.component";

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [
    ProductGridComponent,
    NgForOf,
    FormsModule,
    FilterSideBarComponent,
    NgIf
  ],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})
export class StorePageComponent implements OnInit {
  selectedCategory: string = 'All';
  priceRange: [number, number] = [0, 200];
  showNew: boolean = false;
  showSale: boolean = false;
  showInStock: boolean = false;
  showOutOfStock: boolean = false;
  sortBy: string = 'featured';
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  loading: boolean = false;
  isMobileFilterOpen: boolean = false;
  productsPerPage: number = 6;
  totalPages: number = 0;

  ngOnInit(): void {
    this.filterProducts();
  }

  // Filter products based on selected filters
  filterProducts(): void {
    let filtered = [...products];

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === this.selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) =>
        (p.onSale ? p.salePrice! : p.price) >= this.priceRange[0] &&
        (p.onSale ? p.salePrice! : p.price) <= this.priceRange[1],
    );

    // Filter by product status
    if (this.showNew) {
      filtered = filtered.filter((p) => p.isNew);
    }
    if (this.showSale) {
      filtered = filtered.filter((p) => p.onSale);
    }

    // Filter by availability
    if (this.showInStock || this.showOutOfStock) {
      filtered = filtered.filter(
        (p) =>
          (this.showInStock && p.inStock) || (this.showOutOfStock && !p.inStock),
      );
    }

    // Sort products
    switch (this.sortBy) {
      case 'price-asc':
        filtered.sort(
          (a, b) =>
            (a.onSale ? a.salePrice! : a.price) -
            (b.onSale ? b.salePrice! : b.price),
        );
        break;
      case 'price-desc':
        filtered.sort(
          (a, b) =>
            (b.onSale ? b.salePrice! : b.price) -
            (a.onSale ? a.salePrice! : a.price),
        );
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    this.filteredProducts = filtered;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
    this.currentPage = 1;
  }

  // Handle page change
  handlePageChange(page: number): void {
    this.loading = true;
    this.currentPage = page;
    window.scrollTo(0, 0);
    setTimeout(() => (this.loading = false), 300);
  }

  // Get visible products for the current page
  get visibleProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  // Generate an array of page numbers
  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
}
