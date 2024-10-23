import {PetOwnerLayoutComponent} from "./pet-owner-layout/pet-owner-layout.component";
import {Route} from "@angular/router";
import {HomePetOwnerComponent} from "./home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./care-pet-owner/care-pet-owner.component";

export const PET_OWNER_ROUTES:Route[] = [
  {path:"pet-owner", component:PetOwnerLayoutComponent, children:[
      {
        path: 'home', component: HomePetOwnerComponent
      },
      {
        path: 'care', component: CarePetOwnerComponent
      }
    ]},
]
