import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserData} from "../../../../models/user-data";
import {UserService} from "../../../../services/user.service";
import {JwtService} from "../../../../services/jwt.service";

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUserById();
  }

  editMode = false;

  user: UserData = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: ''
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  async saveProfile() {
    this.editMode = false;
    await this.userService.updateUser(this.user);
  }
}
