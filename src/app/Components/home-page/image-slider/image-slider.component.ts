import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {

  images: string[] = [];
  currentImage = 0;
  imageIdForCSS = 1;
  intervalId!: any;

  ngOnInit(): void {
    this.images = [
      'assets/images/home1.png',
      'assets/images/home2.jpeg',
      'assets/images/home3.jpeg',
      'assets/images/home4.jpeg'
    ];

    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  prevImage(): void {
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.images.length - 1;
    }
    this.updateImageIdForCSS();
  }

  nextImage(): void {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
    this.updateImageIdForCSS();
  }

  goToImage(image: number): void {
    this.currentImage = image - 1;
    this.updateImageIdForCSS();
  }

  updateImageIdForCSS(): void {
    this.imageIdForCSS = this.currentImage + 1;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 10000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
