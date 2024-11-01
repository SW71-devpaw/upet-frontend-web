import {Component, Input} from '@angular/core';
import {AppointmentSchemaGet} from "../../../../../core/Appointment/schema/appointment.interface";
import {PetSchemaResponse} from "../../../../../core/Pet/schema/pet.interface";
import {VeterinarianSchemaResponse} from "../../../../../core/Veterinarian/schema/veterinarian.interface";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointment-details',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.css'
})
export class AppointmentDetailsComponent {
  @Input() appointment!: AppointmentSchemaGet;
  @Input() pet!:PetSchemaResponse;
  @Input() vet!: VeterinarianSchemaResponse;

  constructor(
    private router:Router
  ) {
  }

  navigateToVetProfile = () => {
    this.router.navigate([`/pet-owner/clinics/${this.vet.clinicId}/${this.vet.id}`]).then(p=>p);
  }
  navigateToPetProfile = () => {
    this.router.navigate([`/pet-owner/pets/${this.pet.id}`]).then(p=>p);
  }
}
