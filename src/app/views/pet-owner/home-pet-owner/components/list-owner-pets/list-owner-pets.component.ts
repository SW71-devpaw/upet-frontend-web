import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PetResponse} from "../../interfaces/PetResponse";

import {NgForOf} from "@angular/common";
import {HomePetOwnerService} from "../../services/home-pet-owner.service";
import {FormAddPetComponent} from "../form-add-pet/form-add-pet.component";
import {DialogModule} from "primeng/dialog";
import {TypeForm} from "../../interfaces/type-form.enum";
import {PetCardComponent} from "../../../../../shared/components/pet-card/pet-card.component";
import { PetsApiService } from '../../../../../core/networking/services/pets-api.service';

@Component({
  selector: 'app-list-owner-pets',
  standalone: true,
  imports: [
    PetCardComponent,
    NgForOf,
    FormAddPetComponent,
    DialogModule
  ],
  templateUrl: './list-owner-pets.component.html',
  styleUrl: './list-owner-pets.component.css'
})
export class ListOwnerPetsComponent {
  pets:PetResponse[] = [];
  visibleAddPet:boolean = false;

  constructor(
    private petsApiService: PetsApiService,
  ) {
  }
  ngOnInit() {
    this.petsApiService.getMyPets(1).subscribe((data) => {
      this.pets = data;
    });
  }

  openDialogAddPet() {
    this.visibleAddPet = true;
  }

  closeDialogAddPet = () =>{
    this.visibleAddPet = false;
  }

  protected readonly TypeForm = TypeForm;
}
