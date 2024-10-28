import { Component } from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {NgForOf} from "@angular/common";

import {VetCardComponent} from "../../../../../shared/components/vet-card/vet-card.component";
import { PetCardComponent } from '../../../../../shared/components/pet-card/pet-card.component';
import { FormAddPetComponent } from '../form-add-pet/form-add-pet.component';
import { VetResponse } from '../../interfaces/VetResponse';
import { VeterinarianProfileSchemaResponse, VeterinarianSchemaResponse } from '../../../../../core/Veterinarian/schema/veterinarian.interface';
import { VeterinarianService } from '../../../../../core/Veterinarian/services/veterinarian.service';
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

  vetService: VeterinarianService;
  veterinarians : VeterinarianSchemaResponse[] = [];
  constructor(private veterinarianService: VeterinarianService) {
    this.vetService = veterinarianService;
    veterinarianService.getVeterinarians().subscribe((data: VeterinarianSchemaResponse[]) => {
      this.veterinarians = data.map(vet => ({
        ...vet,
        clinicName: '',
        workingHourStart: '',
        workingHourEnd: '',
        clinicAddress: '',
        reviews: []
      }));
    });
  }


}
