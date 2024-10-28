import { Component } from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormAddPetComponent} from "../form-add-pet/form-add-pet.component";
import {NgForOf} from "@angular/common";
import {PetCardComponent} from "../../../../../shared/components/pet-card/pet-card.component";
import {VetResponse} from "../../../../../core/networking/response/VetResponse";
import {VetCardComponent} from "../../../../../shared/components/vet-card/vet-card.component";
import {VetClinicsApiService} from "../../../../../core/networking/services/vet-clinics-api.service";
import {ClinicCardComponent} from "../../../../../shared/components/clinic-card/clinic-card.component";
import {Router} from "@angular/router";
import {VetClinicResponse} from "../../../../../core/networking/response/VetClinicResponse";

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
  veterinarians:VetClinicResponse[] = [];

  constructor(
    private vetClinicsApiService:VetClinicsApiService,
    private router:Router
  ) {}

  ngOnInit() {
    this.vetClinicsApiService.getAllClinics().subscribe((data)=>{
      this.veterinarians = data;
    });
  }

  redirectToAllClinics() {
    this.router.navigate(['/pet-owner/clinics']).then(r=>r);
  }

}
