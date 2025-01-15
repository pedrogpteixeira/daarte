import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ContentComponent} from "./content/content.component";
import {FooterComponent} from "./footer/footer.component";
import {TopBarComponent} from "./top-bar/top-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TopBarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
    ngOnInit(): void {}

    public constructor() {}

}
