import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogModule} from "primeng/dialog";
import {
  FormAddPetComponent
} from "../../../views/pet-owner/home-pet-owner/components/form-add-pet/form-add-pet.component";
import {TypeForm} from "../../../views/pet-owner/home-pet-owner/interfaces/type-form.enum";
import {NgClass, NgIf} from "@angular/common";
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
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";

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
    VaccinesComponent,
    NgClass,
    InputTextModule,
    FloatLabelModule,
    PaginatorModule,
    ReactiveFormsModule
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
  isTracked= false;
  petCollarData = {
    id: 1,
    temperature: 37.5,
    lpm: 80,
    bpm: 80,
    location:{ lat: 125, lng: 125},
    battery: 100,
  }

  dialogStartTrackVisible = false;
  dialogStopTrackVisible = false;

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
  startTrack(){
    this.isTracked = true;
    this.closeDialogTracking();
  }
  stopTrack(){
    this.isTracked = false;
    this.closeDialogStopTracking();
  }
  openDialogTracking(){
    this.dialogStartTrackVisible = true;
  }
  closeDialogTracking(){
    this.dialogStartTrackVisible = false;
  }
  openDialogStopTracking(){
    this.dialogStopTrackVisible = true;
  }
  closeDialogStopTracking(){
    this.dialogStopTrackVisible = false;
  }
  protected readonly TypeForm = TypeForm;
}
