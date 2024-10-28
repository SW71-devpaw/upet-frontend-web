import {Component, Input} from '@angular/core';
import { VetResponse } from '../../../core/networking/response/VetResponse';
import {VeterinarianSchemaGet} from "../../../core/Veterinarian/schema/veterinarian.interface";

@Component({
  selector: 'app-vet-card',
  standalone: true,
  imports: [],
  templateUrl: './vet-card.component.html',
  styleUrl: './vet-card.component.css'
})
export class VetCardComponent {
  @Input() vet!: VeterinarianSchemaGet;
  constructor() {
  }
}
