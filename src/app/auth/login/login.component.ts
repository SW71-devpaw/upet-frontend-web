import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { catchError, of } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../core/auth/schema/login.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;


  constructor(private authService: AuthService, private router: Router) {}


  login() {
    const request: LoginRequest = { email: this.email, password: this.password };

    this.authService.login(request).pipe(
      catchError((error) => {
        this.errorMessage = 'Error en el inicio de sesión. Por favor, inténtelo de nuevo.'; // Mensaje de error
        return of(null); // Puedes manejar el error de manera más sofisticada si lo deseas
      })
    ).subscribe((response: LoginResponse | null) => {
      if (response) {
        console.log('Login successful', response);
        this.router.navigate(['/pet-owner/home']); 
      }
    });
  }

}
