import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PetResponse} from "../../../views/pet-owner/home-pet-owner/interfaces/PetResponse";
import {HomePetOwnerService} from "../../../views/pet-owner/home-pet-owner/services/home-pet-owner.service";
import {DialogModule} from "primeng/dialog";
import {FormAddPetComponent} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DialogModule,
    FormAddPetComponent
  ],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  constructor(private homePetOwnerService:HomePetOwnerService) {
  }
  @Input() pet:PetResponse = {} as PetResponse;
  visible = false;

  deletePet(){
    this.homePetOwnerService.deletePet(this.pet.id!).subscribe(
      data =>{alert("Pet deleted successfully")},
    );
  }
  openDialogEdit() {
    this.visible = true;
  }

  closeDialogEdit = () =>{
    this.visible = false;
  }
  protected readonly TypeForm = TypeForm;
}
