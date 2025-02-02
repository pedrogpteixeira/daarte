import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-text',
  standalone: true,
  imports: [],
  templateUrl: './home-text.component.html',
  styleUrl: './home-text.component.css'
})
export class HomeTextComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  homeMessage = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

}
