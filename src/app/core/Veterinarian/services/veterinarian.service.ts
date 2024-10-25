import { Injectable } from '@angular/core';
import { UpetApiService } from '../../Api/UpetBackend/upet-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Token, VeterinarianSchemaPost, VeterinarianSchemaGet, VeterinarianUpdateInformation, VeterinarianProfileSchemaGet, AvailabilitySchemaPost } from './models'; // Asegúrate de tener estos modelos definidos

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService extends UpetApiService {
  private apiUrl: string;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = this.buildUrl('veterinarians'); // Cambiar a veterinarians
  }

  // Crear un veterinario
  createVeterinarian(userId: number, veterinarian: VeterinarianSchemaPost): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/${userId}`, veterinarian).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todos los veterinarios
  getVeterinarians(): Observable<VeterinarianSchemaGet[]> {
    return this.http.get<VeterinarianSchemaGet[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un veterinario por ID de usuario
  getVeterinarianByUserId(userId: number): Observable<VeterinarianSchemaGet> {
    return this.http.get<VeterinarianSchemaGet>(`${this.apiUrl}/users/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un veterinario por ID
  getVeterinarianById(vetId: number): Observable<VeterinarianSchemaGet> {
    return this.http.get<VeterinarianSchemaGet>(`${this.apiUrl}/${vetId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener veterinarios por ID de clínica
  getVetsByClinicId(clinicId: number): Observable<VeterinarianSchemaGet[]> {
    return this.http.get<VeterinarianSchemaGet[]>(`${this.apiUrl}/vets/${clinicId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener detalles de un veterinario
  getVetByIdDetails(vetId: number): Observable<VeterinarianProfileSchemaGet> {
    return this.http.get<VeterinarianProfileSchemaGet>(`${this.apiUrl}/reviews/${vetId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener horarios disponibles de un veterinario
  getAvailableTimes(vetId: number, availabilityData: AvailabilitySchemaPost): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${vetId}/available_times`, availabilityData).pipe(
      catchError(this.handleError)
    );
  }

  // Cambiar información de un veterinario
  changeVetInformation(vetId: number, vetData: VeterinarianUpdateInformation): Observable<VeterinarianSchemaGet> {
    return this.http.put<VeterinarianSchemaGet>(`${this.apiUrl}/${vetId}`, vetData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en la solicitud', error);
    return throwError(() => error);   
  }
}
