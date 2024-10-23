import { Routes } from '@angular/router';
import {HomePetOwnerComponent} from "./views/pet-owner/home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./views/pet-owner/care-pet-owner/care-pet-owner.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {PET_OWNER_ROUTES} from "./views/pet-owner/pet-owner.routes";

export const routes: Routes = [
  ...AUTH_ROUTES,
  ...PET_OWNER_ROUTES,
  { path: '**', component: HomePetOwnerComponent },
];
