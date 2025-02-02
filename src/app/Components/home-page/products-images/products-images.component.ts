import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

interface ProductImage {
  src: string,
  src2: string,
  name: string;
  goto: string;
}

@Component({
  selector: 'app-products-images',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './products-images.component.html',
  styleUrl: './products-images.component.css'
})
export class ProductsImagesComponent implements OnInit {
  productImages: ProductImage[] = [
    {
      src: 'assets/images/keychain.jpg',
      src2: 'assets/images/keychain2.jpg',
      name: 'keychains',
      goto: 'keychains'
    },
    {
      src: 'assets/images/necessaire.jpg',
      src2: 'assets/images/necessaire2.png',
      name: 'necessaires',
      goto: 'necessaires'
    },
    {
      src: 'assets/images/scrunchie.jpg',
      src2: 'assets/images/scrunchie2.jpg',
      name: 'scrunchies',
      goto: 'scrunchies'
    },
    {
      src: 'assets/images/bag.jpg',
      src2: 'assets/images/bag2.jpg',
      name: 'bags',
      goto: 'bags'
    }
  ];

  ngOnInit() {
  }

  constructor() {
  }

  changeImage(image: any, src: string) {
    image.src = src;
  }
}
