import { Routes } from '@angular/router';
import {HomePetOwnerComponent} from "./views/home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./views/care-pet-owner/care-pet-owner.component";

export const routes: Routes = [

  {path:"home/pet-owner", component:HomePetOwnerComponent},
  {path:"care/pet-owner", component:CarePetOwnerComponent},
    {
        path: '',
        loadChildren: () => import ('./auth/auth.routes').then(m=>m.AUTH_ROUTES)
    }

];
