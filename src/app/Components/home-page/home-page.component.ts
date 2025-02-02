import {Component, OnInit} from '@angular/core';
import {ImageSliderComponent} from "./image-slider/image-slider.component";
import {HomeTextComponent} from "./home-text/home-text.component";
import {ProductsImagesComponent} from "./products-images/products-images.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ImageSliderComponent,
    HomeTextComponent,
    ProductsImagesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
  }

  public constructor() {
  }
}
