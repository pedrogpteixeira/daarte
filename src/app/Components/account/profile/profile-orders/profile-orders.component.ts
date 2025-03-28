import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile-orders',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    DatePipe,
    TitleCasePipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './profile-orders.component.html',
  styleUrl: './profile-orders.component.css'
})
export class ProfileOrdersComponent {
  selectedFilter = 'all';
  currentPage = 1;
  itemsPerPage = 2;

  allOrders = [
    {
      id: '1001',
      date: new Date('2025-03-15'),
      status: 'delivered',
      subtotal: 145.90,
      shipping: 5.99,
      total: 151.89,
      products: [
        {
          id: 'p1',
          name: 'Premium Coffee Beans',
          image: '/assets/images/products/coffee.jpg',
          quantity: 2,
          price: 29.99
        },
        {
          id: 'p2',
          name: 'Ceramic Coffee Mug',
          image: '/assets/images/products/mug.jpg',
          quantity: 1,
          price: 19.95
        }
      ]
    },
    {
      id: '1002',
      date: new Date('2025-02-22'),
      status: 'shipped',
      subtotal: 89.97,
      shipping: 0.00,
      total: 89.97,
      products: [
        {
          id: 'p3',
          name: 'Coffee Grinder',
          image: '/assets/images/products/grinder.jpg',
          quantity: 1,
          price: 49.99
        },
        {
          id: 'p4',
          name: 'Coffee Filters',
          image: '/assets/images/products/filters.jpg',
          quantity: 2,
          price: 19.99
        }
      ]
    },
    {
      id: '1003',
      date: new Date('2024-03-10'),
      status: 'delivered',
      subtotal: 75.50,
      shipping: 4.99,
      total: 80.49,
      products: [
        {
          id: 'p5',
          name: 'French Press',
          image: '/assets/images/products/press.jpg',
          quantity: 1,
          price: 39.99
        },
        {
          id: 'p6',
          name: 'Coffee Scoop',
          image: '/assets/images/products/scoop.jpg',
          quantity: 1,
          price: 12.50
        }
      ]
    },
    {
      id: '1004',
      date: new Date('2025-01-05'),
      status: 'processing',
      subtotal: 120.00,
      shipping: 0.00,
      total: 120.00,
      products: [
        {
          id: 'p7',
          name: 'Espresso Machine',
          image: '/assets/images/products/espresso.jpg',
          quantity: 1,
          price: 120.00
        }
      ]
    }
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  filteredOrders = [...this.allOrders];
  visibleOrders = this.getPaginatedOrders();

  get totalPages(): number {
    return Math.ceil(this.filteredOrders.length / this.itemsPerPage);
  }

  filterOrders() {
    const now = new Date();

    switch (this.selectedFilter) {
      case 'last30':
        const date30DaysAgo = new Date();
        date30DaysAgo.setDate(now.getDate() - 30);
        this.filteredOrders = this.allOrders
          .filter(order => order.date >= date30DaysAgo)
          .sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'last6months':
        const date6MonthsAgo = new Date();
        date6MonthsAgo.setMonth(now.getMonth() - 6);
        this.filteredOrders = this.allOrders
          .filter(order => order.date >= date6MonthsAgo)
          .sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case '2024':
        this.filteredOrders = this.allOrders
          .filter(order => order.date.getFullYear() === 2024)
          .sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      default:
        this.filteredOrders = [...this.allOrders]; // Já está ordenado
    }

    this.currentPage = 1;
    this.updateVisibleOrders();
  }

  getPaginatedOrders() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredOrders.slice(startIndex, startIndex + this.itemsPerPage);
  }

  updateVisibleOrders() {
    this.visibleOrders = this.getPaginatedOrders();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisibleOrders();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisibleOrders();
    }
  }
}
