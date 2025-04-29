import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-filter-side-bar',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './filter-side-bar.component.html',
  styleUrl: './filter-side-bar.component.css'
})
export class FilterSideBarComponent implements OnInit {
  @Input() selectedCategory: string = 'All';
  @Output() selectedCategoryChange = new EventEmitter<string>();

  @Input() priceRange: [number, number] = [0, 200];
  @Output() priceRangeChange = new EventEmitter<[number, number]>();

  @Input() showInStock: boolean = false;
  @Output() showInStockChange = new EventEmitter<boolean>();

  @Input() showOutOfStock: boolean = false;
  @Output() showOutOfStockChange = new EventEmitter<boolean>();

  @Input() isMobileFilterOpen: boolean = false;
  @Output() isMobileFilterOpenChange = new EventEmitter<boolean>();

  categories: Category[] = [{id: 'All', name: 'All'}];

  constructor(private router: Router, private productService: ProductService) {
  }

  async ngOnInit(): Promise<void> {
    const categories1 = await this.productService.getCategories();
    for (const category of categories1) {
      this.categories.push(category);
    }
  }

  // Handle category change
  handleCategoryChange(category: string) {
    this.selectedCategory = category;
    this.router.navigate(['/store', category.toLowerCase()]).then(r => {
    });
    this.selectedCategoryChange.emit(category);
  }

  // Handle price range change
  handlePriceChange(event: Event, index: number) {
    const value = parseInt((event.target as HTMLInputElement).value);
    const newPriceRange: [number, number] = [...this.priceRange];
    newPriceRange[index] = value;
    this.priceRangeChange.emit(newPriceRange);
  }

  // Toggle mobile filter
  toggleMobileFilter(isOpen: boolean) {
    this.isMobileFilterOpen = isOpen;
    this.isMobileFilterOpenChange.emit(isOpen);
  }
}
