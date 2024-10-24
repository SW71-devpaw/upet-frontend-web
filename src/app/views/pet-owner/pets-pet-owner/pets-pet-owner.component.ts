import { Component } from '@angular/core';
import {ListOwnerPetsComponent} from "../home-pet-owner/components/list-owner-pets/list-owner-pets.component";
import {PetResponse} from "../../../core/networking/response/PetResponse";
import {HomePetOwnerService} from "../home-pet-owner/services/home-pet-owner.service";
import {TypeForm} from "../home-pet-owner/interfaces/type-form.enum";
import {NgForOf} from "@angular/common";
import {PetCardComponent} from "../../../shared/components/pet-card/pet-card.component";
import {DialogModule} from "primeng/dialog";
import {FormAddPetComponent} from "../home-pet-owner/components/form-add-pet/form-add-pet.component";

@Component({
  selector: 'app-pets-pet-owner',
  standalone: true,
  imports: [
    ListOwnerPetsComponent,
    NgForOf,
    PetCardComponent,
    DialogModule,
    FormAddPetComponent
  ],
  templateUrl: './pets-pet-owner.component.html',
  styleUrl: './pets-pet-owner.component.css'
})
export class PetsPetOwnerComponent {
  pets:PetResponse[] = [];
  visibleAddPet:boolean = false;

  constructor(
    private homePetOwnerService: HomePetOwnerService,
  ) {
  }

  ngOnInit() {
    this.homePetOwnerService.getMyPets(1).subscribe((data) => {
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
