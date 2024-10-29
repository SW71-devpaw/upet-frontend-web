import { Component } from '@angular/core';
import {VeterinarianService} from "../../../core/Veterinarian/services/veterinarian.service";
import {ActivatedRoute} from "@angular/router";
import {activate} from "@angular/fire/remote-config";
import {JsonPipe} from "@angular/common";
import {Button} from "primeng/button";
import {VeterinaryClinicSchemaGet} from "../../../core/VeterinaryClinic/schema/veterinary-clinic.interface";
import {VeterinaryClinicService} from "../../../core/VeterinaryClinic/services/veterinary-clinic.service";
import {VetListReviewComponent} from "../../components/vet-list-review/vet-list-review.component";
import {DialogModule} from "primeng/dialog";
import {
  FormAddPetComponent
} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";
import {VeterinarianSchemaResponse} from "../../../core/Veterinarian/schema/veterinarian.interface";

@Component({
  selector: 'app-vet-public-profile',
  standalone: true,
  imports: [
    JsonPipe,
    Button,
    VetListReviewComponent,
    DialogModule,
    FormAddPetComponent
  ],
  templateUrl: './vet-public-profile.component.html',
  styleUrl: './vet-public-profile.component.css'
})
export class VetPublicProfileComponent {
    vet:VeterinarianSchemaResponse = {} as VeterinarianSchemaResponse;
    clinic:VeterinaryClinicSchemaGet = {} as VeterinaryClinicSchemaGet;
    formVisible: boolean = false;

    constructor(
      private veterinarianService:VeterinarianService,
      private veterinaryClinicService:VeterinaryClinicService,
      private activatedRoute:ActivatedRoute
      ) {
    }
    ngOnInit() {
      let vetId: string = this.activatedRoute.snapshot.params["vetId"];
      this.veterinarianService.getVeterinarianById(+vetId).subscribe((data: VeterinarianSchemaResponse) => {
        this.vet = data;
        this.veterinaryClinicService.getVeterinaryClinicById(this.vet.clinicId).subscribe((data: VeterinaryClinicSchemaGet) => {
          this.clinic = data;
        });
      });

    }
    closeDialog(){
      this.formVisible = false;
    }
    openDialog(){
      this.formVisible = true;
    }
  protected readonly TypeForm = TypeForm;
}
