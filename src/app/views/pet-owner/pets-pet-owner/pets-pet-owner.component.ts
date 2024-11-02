import { Component } from '@angular/core';
import {HomePetOwnerService} from "../home-pet-owner/services/home-pet-owner.service";
import {TypeForm} from "../home-pet-owner/interfaces/type-form.enum";
import {NgForOf} from "@angular/common";
import {PetCardComponent} from "../../../shared/components/pet-card/pet-card.component";
import {DialogModule} from "primeng/dialog";
import { ListOwnerPetsComponent } from '../home-pet-owner/components/list-owner-pets/list-owner-pets.component';
import { FormAddPetComponent } from '../home-pet-owner/components/form-add-pet/form-add-pet.component';
import { PetSchemaResponse } from '../../../core/Pet/schema/pet.interface';
import {DecodedToken} from "../../../core/auth/schema/decoded-token.interface";
import {AuthService} from "../../../core/auth/services/auth.service";

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
  pets:PetSchemaResponse[] = [];
  visibleAddPet:boolean = false;
  user:DecodedToken|null;

  constructor(
    private homePetOwnerService: HomePetOwnerService,
    private authService:AuthService
  ) {
    this.user = authService.decodeToken();
  }

  ngOnInit() {
    this.homePetOwnerService.getMyPets(this.user?.user_id!).subscribe((data) => {
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
