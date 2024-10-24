import {Component, Input} from '@angular/core';
<<<<<<< HEAD
import {VetResponse} from "../../../views/pet-owner/home-pet-owner/interfaces/VetResponse";
=======
import {VetResponse} from "../../../core/networking/response/VetResponse";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c

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
