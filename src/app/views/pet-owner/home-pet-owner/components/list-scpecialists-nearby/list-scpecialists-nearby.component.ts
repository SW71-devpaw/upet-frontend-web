import { Component } from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {NgForOf} from "@angular/common";
import {VetCardComponent} from "../../../../../shared/components/vet-card/vet-card.component";
import { PetCardComponent } from '../../../../../shared/components/pet-card/pet-card.component';
import { FormAddPetComponent } from '../form-add-pet/form-add-pet.component';
import { VeterinarianProfileSchemaResponse, VeterinarianSchemaResponse } from '../../../../../core/Veterinarian/schema/veterinarian.interface';
import { VeterinarianService } from '../../../../../core/Veterinarian/services/veterinarian.service';
import {ClinicCardComponent} from "../../../../../shared/components/clinic-card/clinic-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-scpecialists-nearby',
  standalone: true,
  imports: [
    DialogModule,
    FormAddPetComponent,
    NgForOf,
    PetCardComponent,
    VetCardComponent,
    ClinicCardComponent
  ],
  templateUrl: './list-scpecialists-nearby.component.html',
  styleUrl: './list-scpecialists-nearby.component.css'
})
export class ListScpecialistsNearbyComponent {
  vetService: VeterinarianService;
  veterinarians : VeterinarianSchemaResponse[] = [];

  constructor(
    private veterinarianService: VeterinarianService,
    private router:Router

  ) {

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

  redirectToAllClinics() {
    this.router.navigate(['/pet-owner/clinics']).then(r=>r);
  }

}
