import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DecodedToken} from "../../../core/auth/schema/decoded-token.interface";
import {AuthService} from "../../../core/auth/services/auth.service";
import {PetOwnerSchemaGet} from "../../../core/PetOwner/schema/petowner.interface";
import {PetOwnerService} from "../../../core/PetOwner/services/pet-owner.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  user:DecodedToken|null;
  petOwner:PetOwnerSchemaGet = {} as PetOwnerSchemaGet;

  constructor(
    private authService:AuthService,
    private petOwnerService:PetOwnerService
  ) {
    this.user = this.authService.decodeToken();
    this.petOwnerService.getPetOwnerById(this.user?.user_id!)
      .subscribe((petOwner:PetOwnerSchemaGet) => {
        this.petOwner = petOwner;
      });
  }
}
