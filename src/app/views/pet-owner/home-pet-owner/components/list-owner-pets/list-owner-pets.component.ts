import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PetResponse } from "../../interfaces/PetResponse";
import { TypeForm } from "../../interfaces/type-form.enum";
import { PetService } from '../../../../../core/Pet/services/pet.service';
import { NgForOf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { PetCardComponent } from '../../../../../shared/components/pet-card/pet-card.component';
import { FormAddPetComponent } from '../form-add-pet/form-add-pet.component';
import { CommonModule } from '@angular/common';
import { PetSchemaResponse } from '../../../../../core/Pet/schema/pet.interface';

@Component({
  selector: 'app-list-owner-pets',
  standalone: true,
  imports: [
    CommonModule,
    PetCardComponent,
    NgForOf,
    FormAddPetComponent,
    DialogModule
  ],
  templateUrl: './list-owner-pets.component.html',
  styleUrls: ['./list-owner-pets.component.css']  // Aquí se corrige a 'styleUrls'
})
export class ListOwnerPetsComponent {
  pets: PetSchemaResponse[] = [];
  visibleAddPet: boolean = false;

  constructor(
    private petsApiService: PetService,
  ) {}

  ngOnInit() {
    this.petsApiService.getPets();
  }

  openDialogAddPet() {
    this.visibleAddPet = true;
  }

  closeDialogAddPet = () => {
    this.visibleAddPet = false;
  }

  protected readonly TypeForm = TypeForm;
}
