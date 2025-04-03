import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'João Silva',
    email: 'joao.silva@example.com',
    orders: 12
  };
}
