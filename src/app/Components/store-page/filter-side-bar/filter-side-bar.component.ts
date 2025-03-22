import {Component, EventEmitter, Input, Output} from '@angular/core';
import {categories} from "../../../../utils/mockData";
import {NgForOf, NgIf} from "@angular/common";

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
export class FilterSideBarComponent {
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

  // Handle category change
  handleCategoryChange(category: string) {
    this.selectedCategory = category;
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

  protected readonly categories = categories;
}
