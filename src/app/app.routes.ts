import { Routes } from '@angular/router';
import {PET_OWNER_ROUTES} from "./views/pet-owner/pet-owner.routes";
import {AUTH_ROUTES} from "./auth/auth.routes";

export const routes: Routes = [
  ...AUTH_ROUTES,
  ...PET_OWNER_ROUTES,
  {path: '**', redirectTo: 'auth/login'}
];
