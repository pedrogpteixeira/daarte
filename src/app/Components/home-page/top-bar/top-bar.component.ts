import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit, OnDestroy{

  quotes: string[] = [];
  currentQuote = 0;
  intervalId!: any;

  ngOnInit(): void {
    this.quotes = [
      'obrigada por comprar handmade',
      'envio grátis para portugal acima de 50€'
    ];

    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextQuote(): void {
    if (this.currentQuote < this.quotes.length - 1) {
      this.currentQuote++;
    } else {
      this.currentQuote = 0;
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextQuote();
    }, 7000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
