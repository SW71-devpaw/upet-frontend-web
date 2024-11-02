import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogModule} from "primeng/dialog";
import {
  FormAddPetComponent
} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {MedicalResultsComponent} from "./components/medical-results/medical-results.component";
import {DiseasesComponent} from "./components/diseases/diseases.component";
import {SurgeriesComponent} from "./components/surgeries/surgeries.component";
import {VaccinesComponent} from "./components/vaccines/vaccines.component";
import { MedicalHistoryBaseService } from '../../../core/MedicalHistory/services/shared/medical-history-base.service';
import { PetService } from '../../../core/Pet/services/pet.service';
import { PetResponse } from '../../../views/pet-owner/home-pet-owner/interfaces/PetResponse';
import { PetSchemaResponse } from '../../../core/Pet/schema/pet.interface';

@Component({
  selector: 'app-pet-profile-view',
  standalone: true,
  imports: [
    DialogModule,
    FormAddPetComponent,
    NgIf,
    Button,
    AccordionModule,
    MedicalResultsComponent,
    DiseasesComponent,
    SurgeriesComponent,
    VaccinesComponent
  ],
  templateUrl: './pet-profile-view.component.html',
  styleUrl: './pet-profile-view.component.css'
})
export class PetProfileViewComponent {

  pet: PetSchemaResponse | undefined;
  petId: number | undefined;
  historyId: number | undefined;
  visible = false;
  activeIndex: number | undefined = 0;

  constructor(
    private router: ActivatedRoute,
    private petsApiService: PetService,
    private historyApiService: MedicalHistoryBaseService
  ) {
    this.router.params.subscribe(params => {
      this.petId = params['id'];
    });
  }

  ngOnInit() {
    if (this.petId) {
      this.petsApiService.getPetById(this.petId).subscribe(pet => {
        this.pet = {
          ...pet,
          petOwnerId: pet.petOwnerId
        };
        console.log({location: 'PetProfileViewComponent', pet});
      });
      this.historyApiService.getMedicalHistoryByPetId(this.petId).subscribe(history => {
        this.historyId = history.id;
        console.log({location: 'PetProfileViewComponent', history});
      });
    }
  }
  closeDialogEdit = () =>{
    this.visible = false;
  }
  openDialogEdit = () =>{
    this.visible = true;
  }
  activeIndexChange(index: number | number[]) {
    if (Array.isArray(index)) {
      this.activeIndex = index[0]; // O maneja según tu lógica, por ejemplo, puedes tomar el primer índice
    } else {
      this.activeIndex = index; // Si es un solo número
    }
    console.log('Índice activo cambiado a:', this.activeIndex);
  }
  getHistoryMedic(){

  }
  protected readonly TypeForm = TypeForm;
}
