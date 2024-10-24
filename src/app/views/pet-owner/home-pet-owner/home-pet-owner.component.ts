import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import {PetCardComponent} from "../../../shared/components/pet-card/pet-card.component";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c
import {BannerOwnerComponent} from "./components/banner-owner/banner-owner.component";
import {ListOwnerPetsComponent} from "./components/list-owner-pets/list-owner-pets.component";
import {
  ListScpecialistsNearbyComponent
} from "./components/list-scpecialists-nearby/list-scpecialists-nearby.component";
import {HomePetOwnerService} from "./services/home-pet-owner.service";
import {PetResponse} from "../../../core/networking/response/PetResponse";
import {FormAddPetComponent} from "./components/form-add-pet/form-add-pet.component";
<<<<<<< HEAD
import {NgClass} from "@angular/common";
import {PetCardComponent} from "../../../shared/components/pet-card/pet-card.component";
=======
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c

@Component({
  selector: 'app-home-pet-owner',
  standalone: true,
  imports: [
    PetCardComponent,
    BannerOwnerComponent,
    ListOwnerPetsComponent,
    ListScpecialistsNearbyComponent,
    NgClass,
  ],
  templateUrl: './home-pet-owner.component.html',
  styleUrl: './home-pet-owner.component.css'
})
export class HomePetOwnerComponent {

}
