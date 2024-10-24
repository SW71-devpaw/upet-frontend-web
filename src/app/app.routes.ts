import { Routes } from '@angular/router';
<<<<<<< HEAD
import {PET_OWNER_ROUTES} from "./views/pet-owner/pet-owner.routes";
import {AUTH_ROUTES} from "./auth/auth.routes";
=======
import {HomePetOwnerComponent} from "./views/pet-owner/home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./views/pet-owner/care-pet-owner/care-pet-owner.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {PET_OWNER_ROUTES} from "./views/pet-owner/pet-owner.routes";
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c

export const routes: Routes = [
  ...AUTH_ROUTES,
  ...PET_OWNER_ROUTES,
<<<<<<< HEAD
=======
  { path: '**', component: HomePetOwnerComponent },
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c
];
