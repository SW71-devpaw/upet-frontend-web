import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetOwnerService } from '../../core/PetOwner/services/pet-owner.service';
import { PetOwnerSchemaPost } from '../../core/PetOwner/schema/petowner.interface';
import { AuthService } from '../../core/auth/services/auth.service';
import { navigateTo } from '../shared/auth.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-owner-register',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './pet-owner-register.component.html',
  styleUrl: './pet-owner-register.component.css'
})
export class PetOwnerRegisterComponent {
  numberPhone: string = '';
  location: string = '';
  errorMessage: string = '';
  locationSuggestions: any[] = [];


  constructor(
    private http: HttpClient, 
    private petOwnerService: PetOwnerService,
    private authService: AuthService,
    private router: Router) {}

  // Obtener sugerencias de ubicación de OSM usando Nominatim
  getLocationSuggestions(query: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`;
    this.http.get(url).subscribe((data: any) => {
      this.locationSuggestions = data;
    });
  }
  // Seleccionar una ubicación de la lista de sugerencias
  selectLocation(suggestion: any) {
    this.location = suggestion.display_name;
    this.locationSuggestions = []; // Limpiar sugerencias
  }

  // Función de registro
  register() {
    let userData: PetOwnerSchemaPost = {
      numberPhone: this.numberPhone,
      location: this.location
    };
    console.log('Datos de registro:', userData);
    const user_id =this.authService.decodeToken()?.user_id;

    if (user_id) {
      this.petOwnerService.createPetOwner(user_id, userData).subscribe(
        (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/pet-owner/home']);
        },
        (error) => {
          console.error('Error en el registro', error);
          this.errorMessage = 'Error en el registro. Por favor, inténtelo de nuevo.';
        }
      )
    }
    else {
      console.error('Error al obtener el ID de usuario');
      return;
    }

  
  }
}
