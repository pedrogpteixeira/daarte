import {Component, HostListener} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TopBarComponent} from "./Components/home-page/top-bar/top-bar.component";
import {FooterComponent} from "./Components/home-page/footer/footer.component";
import {HeaderComponent} from "./Components/home-page/header/header.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, FooterComponent, HeaderComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'da arte';

  isScrolled = false; // Estado para verificar o scroll

  isPopupsRoute = false;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isPopupsRoute = this.router.url === '/popups';
    });
  }

  public constructor(private router: Router) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 0; // Define o estado baseado na posição do scroll
  }
}
