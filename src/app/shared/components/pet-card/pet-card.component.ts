import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
<<<<<<< HEAD
import {DialogModule} from "primeng/dialog";
import {
  FormAddPetComponent
} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {HomePetOwnerService} from "../../../views/pet-owner/home-pet-owner/services/home-pet-owner.service";
import {PetResponse} from "../../../views/pet-owner/home-pet-owner/interfaces/PetResponse";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";
=======
import {PetResponse} from "../../../core/networking/response/PetResponse";
import {HomePetOwnerService} from "../../../views/pet-owner/home-pet-owner/services/home-pet-owner.service";
import {DialogModule} from "primeng/dialog";
import {FormAddPetComponent} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";
import {Router} from "@angular/router";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DialogModule,
    FormAddPetComponent,
  ],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  constructor(private homePetOwnerService:HomePetOwnerService, private router:Router) {
  }
  @Input() pet:PetResponse = {} as PetResponse;
  visible = false;

  toProfile(){
    this.router.navigate(['pet-owner/pets', this.pet.id]);
  }
  openDialogEdit() {
    this.visible = true;
  }

  closeDialogEdit = () =>{
    this.visible = false;
  }
  protected readonly TypeForm = TypeForm;
}
