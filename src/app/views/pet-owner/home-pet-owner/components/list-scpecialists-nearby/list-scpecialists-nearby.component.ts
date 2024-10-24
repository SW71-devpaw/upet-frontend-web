import { Component } from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormAddPetComponent} from "../form-add-pet/form-add-pet.component";
import {NgForOf} from "@angular/common";
<<<<<<< HEAD
import {VetResponse} from "../../interfaces/VetResponse";
import {PetCardComponent} from "../../../../../shared/components/pet-card/pet-card.component";
import {VetCardComponent} from "../../../../../shared/components/vet-card/vet-card.component";
=======
import {PetCardComponent} from "../../../../../shared/components/pet-card/pet-card.component";
import {VetResponse} from "../../../../../core/networking/response/VetResponse";
import {VetCardComponent} from "../../../../../shared/components/vet-card/vet-card.component";
import {VetClinicsApiService} from "../../../../../core/networking/services/vet-clinics-api.service";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c

@Component({
  selector: 'app-list-scpecialists-nearby',
  standalone: true,
  imports: [
    DialogModule,
    FormAddPetComponent,
    NgForOf,
    PetCardComponent,
    VetCardComponent
  ],
  templateUrl: './list-scpecialists-nearby.component.html',
  styleUrl: './list-scpecialists-nearby.component.css'
})
export class ListScpecialistsNearbyComponent {
  constructor(private vetClinicsApiService:VetClinicsApiService) {
  }
   veterinarians: VetResponse[] = [
    {
      name: "Dr. Juan Pérez",
      image_url: "https://raed.academy/wp-content/uploads/2020/06/veterinarios-y-Covid-19-dstNtc.jpg",
      description: "Veterinario especializado en cirugía de mascotas.",
      experience: 10,
      email: "juan.perez@example.com",
      clinicName: "Clínica Mascotas Felices",
      phoneNumber: "555-1234",
      officeHoursStart: "09:00",
      officeHoursEnd: "18:00",
      rate: 4.5,          // Calificación
      distance: 5         // Distancia en km
    },
    {
      name: "Dra. Ana Gómez",
      image_url: "https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg",
      description: "Experta en medicina interna de animales pequeños.",
      experience: 8,
      email: "ana.gomez@example.com",
      clinicName: "Veterinaria Bienestar Animal",
      phoneNumber: "555-5678",
      officeHoursStart: "08:30",
      officeHoursEnd: "17:30",
      rate: 4.8,          // Calificación
      distance: 3         // Distancia en km
    },
    {
      name: "Dr. Luis Martínez",
      image_url: "https://www.portalveterinaria.com/upload/20231115093559vets.jpg",
      description: "Especialista en cuidados geriátricos para mascotas.",
      experience: 12,
      email: "luis.martinez@example.com",
      clinicName: "Clínica Veterinaria Amor Animal",
      phoneNumber: "555-8765",
      officeHoursStart: "10:00",
      officeHoursEnd: "19:00",
      rate: 4.6,          // Calificación
      distance: 10        // Distancia en km
    },
    {
      name: "Dra. Sofia López",
      image_url: "https://www.polisura.edu.co/wp-content/uploads/2024/02/Auxiliar-Veterinaria-2.jpg",
      description: "Con enfoque en comportamiento animal y terapia conductual.",
      experience: 5,
      email: "sofia.lopez@example.com",
      clinicName: "Centro Veterinario Animal Care",
      phoneNumber: "555-4321",
      officeHoursStart: "09:00",
      officeHoursEnd: "16:00",
      rate: 4.2,          // Calificación
      distance: 8         // Distancia en km
    },
    {
      name: "Dr. Carlos Ruiz",
      image_url: "https://enlinea.santotomas.cl/web/wp-content/uploads/sites/2/2016/08/vet-744x465.jpg",
      description: "Veterinario con experiencia en animales exóticos.",
      experience: 7,
      email: "carlos.ruiz@example.com",
      clinicName: "Clínica Veterinaria Exóticos",
      phoneNumber: "555-9876",
      officeHoursStart: "08:00",
      officeHoursEnd: "17:00",
      rate: 4.7,          // Calificación
      distance: 6         // Distancia en km
    },
    {
      name: "Dra. Mariana Torres",
      image_url: "https://axoncomunicacion.net/wp-content/uploads/2024/07/2149100197.jpg",
      description: "Especialista en nutrición y prevención de enfermedades.",
      experience: 9,
      email: "mariana.torres@example.com",
      clinicName: "Veterinaria Salud Animal",
      phoneNumber: "555-3456",
      officeHoursStart: "09:00",
      officeHoursEnd: "18:00",
      rate: 4.9,          // Calificación
      distance: 2         // Distancia en km
    }
  ];

}
