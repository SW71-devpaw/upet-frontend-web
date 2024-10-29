import {Component, Input} from '@angular/core';
import { VetResponse } from '../../../core/networking/response/VetResponse';
import {VeterinarianSchemaGet} from "../../../core/Veterinarian/schema/veterinarian.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vet-card',
  standalone: true,
  imports: [],
  templateUrl: './vet-card.component.html',
  styleUrl: './vet-card.component.css'
})
export class VetCardComponent {
  @Input() vet!: VeterinarianSchemaGet;
  constructor(private router:Router, private activateRoute:ActivatedRoute) {
  }
  navigateToVetProfile() {
    this.router.navigate([this.vet.id], {relativeTo: this.activateRoute}).then(p=>p);
  }
}
