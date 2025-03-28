import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  editMode = false;

  user = {
    name: 'João Silva',
    email: 'joao.silva@example.com',
    addresses: [
      {
        type: 'Casa',
        street: 'Rua das Flores, 123',
        city: 'Lisboa',
        primary: true
      },
      {
        type: 'Trabalho',
        street: 'Avenida da Liberdade, 456',
        city: 'Lisboa',
        primary: false
      }
    ]
  };

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    this.editMode = false;
    console.log('Perfil atualizado:', this.user);
  }
}
