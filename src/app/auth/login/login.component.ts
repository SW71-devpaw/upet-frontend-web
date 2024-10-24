import { Component } from '@angular/core';
import { AUTH_ROUTES } from '../auth.routes';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { LoginRequest, LoginResponse } from '../../core/auth/models/login.interface';
import { catchError, of } from 'rxjs';
import { PET_OWNER_ROUTES } from '../../views/pet-owner/pet-owner.routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
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
