import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {JwtService} from "../../../../services/jwt.service";
import {AuthService} from "../../../../services/auth.service";

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
export class UserProfileComponent implements OnInit {

  constructor(private jwtService: JwtService, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.jwtService.isTokenExpired()) {
      this.authService.logout();
    }
  }

  user = {
    orders: 12
  };

  logout() {
    this.authService.logout();
  }
}
