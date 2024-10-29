import { Injectable } from '@angular/core';
import { UpetApiService } from '../../Api/UpetBackend/upet-api.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../schema/login.interface';
import { RegisterRequest } from '../schema/register.interface';
import { LoginResponse } from '../../shared/login-response.interface';

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

  

}
