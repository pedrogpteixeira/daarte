import {Component, OnInit, HostListener} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ImageSliderComponent} from "./image-slider/image-slider.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    ImageSliderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  isScrolled = false; // Estado para verificar o scroll

  ngOnInit(): void {
  }

  public constructor() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 0; // Define o estado baseado na posição do scroll
  }

}
