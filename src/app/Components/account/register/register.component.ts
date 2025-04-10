import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {RegisterData} from "../../../models/register-data.model";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  showPassword = false;
  passwordChecks: any = {};
  showErrors = false;

  registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/),       // Pelo menos 1 letra maiúscula
      Validators.pattern(/[a-z]/),       // Pelo menos 1 letra minúscula
      Validators.pattern(/[0-9]/),       // Pelo menos 1 número
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/)  // Pelo menos 1 caractere especial
    ]],
    acceptTerms: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm.get('password')?.valueChanges.subscribe(password => {
      this.passwordChecks = this.validatePassword(password);
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      window.location.href = '/account';
    }
  }

  validatePassword(password: string) {
    return {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  }

  getPasswordStrength(): number {
    if (!this.password?.value) return 0;

    let strength = 0;
    const checks = this.passwordChecks;
    const totalChecks = 5; // Total de critérios de validação

    if (checks.minLength) strength += 100 / totalChecks;
    if (checks.hasUpperCase) strength += 100 / totalChecks;
    if (checks.hasLowerCase) strength += 100 / totalChecks;
    if (checks.hasNumber) strength += 100 / totalChecks;
    if (checks.hasSpecialChar) strength += 100 / totalChecks;

    return Math.min(strength, 100); // Garante que não ultrapasse 100%
  }

  public async onSubmit() {
    this.showErrors = true;
    if (this.registerForm.invalid) {
      return;
    }

    const userData: RegisterData = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      roleId: ' '
    }

    try {
      await this.authService.signUp(userData);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get acceptTerms() {
    return this.registerForm.get('acceptTerms');
  }

  shouldShowError(control: any): boolean {
    return control?.invalid && (control?.touched || control?.dirty || this.showErrors);
  }
}
