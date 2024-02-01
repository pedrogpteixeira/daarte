import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ContentComponent} from "./content/content.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
    ngOnInit(): void {}

    public constructor() {}

}
