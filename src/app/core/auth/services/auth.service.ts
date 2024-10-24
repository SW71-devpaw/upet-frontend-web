import { Injectable } from '@angular/core';
import { UpetApiService } from '../../Api/UpetBackend/upet-api.service';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/login.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterRequest } from '../models/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends UpetApiService{
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

  
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en la solicitud', error);
    return throwError(() => error);   
  }

}
