import { Injectable } from '@angular/core';
import { UpetApiService } from '../../Api/UpetBackend/upet-api.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../schema/login.interface';
import { RegisterRequest } from '../schema/register.interface';
import { LoginResponse } from '../../shared/login-response.interface';
import { DecodedToken } from '../schema/decoded-token.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends UpetApiService{
  static decodeToken(): DecodedToken {
      throw new Error('Method not implemented.');
  }
  static storeToken(token: String) {
      throw new Error('Method not implemented.');
  }
  private apiUrl: string;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = this.buildUrl('auth'); // Usa el método buildUrl() heredado
  }
  
  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/sign-in`, request)
           .pipe(
              catchError((error) => this.handleError(error)) // Manejo de errores
           );
  }	  
  
  register(request: RegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/sign-up`, request);
  }

  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }


    // Método para decodificar el token
  decodeToken(): DecodedToken | null {
      const token = this.getToken();
      if (!token) {
        return null; // Retorna null si no hay token
      }
      
      try {
        return jwtDecode<DecodedToken>(token); // Decodifica el token
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null; // Retorna null si hay un error
      }
  }

}
