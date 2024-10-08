import { Component } from '@angular/core';
import {PetCardComponent} from "../../shared/components/pet-card/pet-card.component";
import {BannerOwnerComponent} from "./components/banner-owner/banner-owner.component";
import {ListOwnerPetsComponent} from "./components/list-owner-pets/list-owner-pets.component";
import {
  ListScpecialistsNearbyComponent
} from "./components/list-scpecialists-nearby/list-scpecialists-nearby.component";
import {HomePetOwnerService} from "./services/home-pet-owner.service";
import {PetResponse} from "./interfaces/PetResponse";
import {FormAddPetComponent} from "./components/form-add-pet/form-add-pet.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {NavBarComponent} from "../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-pet-owner',
  standalone: true,
  imports: [
    PetCardComponent,
    BannerOwnerComponent,
    ListOwnerPetsComponent,
    ListScpecialistsNearbyComponent,
    SidebarComponent,
    NgClass,
    NavBarComponent
  ],
  templateUrl: './home-pet-owner.component.html',
  styleUrl: './home-pet-owner.component.css'
})
export class HomePetOwnerComponent {
  isSidebarCollapsed=false;

  onSidebarToggle(isCollapsed:boolean){
    this.isSidebarCollapsed = isCollapsed
  }

}
