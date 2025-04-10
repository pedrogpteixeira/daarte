import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showPassword = false;
  showErrors = false;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [false]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()){
      window.location.href = '/account';
    }
  }

  async onSubmit() {
    this.showErrors = true;
    if (this.loginForm.valid) {
      await this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.rememberMe);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  shouldShowError(control: any): boolean {
    return control?.invalid && (control?.touched || control?.dirty || this.showErrors);
  }
}
