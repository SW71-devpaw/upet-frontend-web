import {Component, Input} from '@angular/core';
import {VetResponse} from "../../../core/networking/response/VetResponse";

@Component({
  selector: 'app-vet-card',
  standalone: true,
  imports: [],
  templateUrl: './vet-card.component.html',
  styleUrl: './vet-card.component.css'
})
export class VetCardComponent {
  @Input() vet!: VetResponse;
}
