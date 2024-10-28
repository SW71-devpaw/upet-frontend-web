import {Component, Input} from '@angular/core';
import { VeterinarianProfileSchemaResponse, VeterinarianSchemaResponse } from '../../../core/Veterinarian/schema/veterinarian.interface';
import { VeterinaryClinicService } from '../../../core/VeterinaryClinic/services/veterinary-clinic.service';
import { VeterinaryClinicSchemaGet } from '../../../core/VeterinaryClinic/schema/veterinary-clinic.interface';

@Component({
  selector: 'app-vet-card',
  standalone: true,
  imports: [],
  templateUrl: './vet-card.component.html',
  styleUrl: './vet-card.component.css'
})
export class VetCardComponent {
  @Input() vet!: VeterinarianSchemaResponse;
  clinic: VeterinaryClinicSchemaGet | undefined;

  constructor(private vetClinicService: VeterinaryClinicService) {
    this.vetClinicService.getVeterinaryClinicById(this.vet.clinicId).subscribe(clinic => {
      this.clinic = clinic;
    });
  }
  
}
