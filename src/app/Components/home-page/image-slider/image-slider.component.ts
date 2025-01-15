import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit {

  imageUrl: string = 'assets/images/home1.png'; // Caminho da imagem inicial

  ngOnInit(): void {
  }

}
