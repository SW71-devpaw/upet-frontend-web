import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetOwnerService } from '../../core/PetOwner/services/pet-owner.service';
import { PetOwnerSchemaPost } from '../../core/PetOwner/schema/petowner.interface';

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

  petOwnerService = PetOwnerService;

  constructor(private http: HttpClient) {}

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




    // Aquí enviarías `userData` a tu backend para registrar el nuevo usuario
    console.log('Datos de registro:', userData);
    // Implementa lógica adicional de registro aquí o llama al servicio de API
  }
}
