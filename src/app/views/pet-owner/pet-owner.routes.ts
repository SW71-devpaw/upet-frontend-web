<<<<<<< HEAD
import {Route} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HomePetOwnerComponent} from "./home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./care-pet-owner/care-pet-owner.component";

export const PET_OWNER_ROUTES:Route[] = [
  {path:"pet-owner", component:MainLayoutComponent, children:[
      {
        path: 'home', component: HomePetOwnerComponent
      },
      {
        path: 'care', component: CarePetOwnerComponent
      }
    ]},
=======
import {PetOwnerLayoutComponent} from "./pet-owner-layout/pet-owner-layout.component";
import {Route} from "@angular/router";
import {HomePetOwnerComponent} from "./home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "./care-pet-owner/care-pet-owner.component";
import {PetsPetOwnerComponent} from "./pets-pet-owner/pets-pet-owner.component";
import {PetProfileViewComponent} from "../../shared/views/pet-profile-view/pet-profile-view.component";

export const PET_OWNER_ROUTES: Route[] = [
    {
        path: "pet-owner", component: PetOwnerLayoutComponent, children: [
            {
                path: 'home', component: HomePetOwnerComponent
            },
            {
                path: 'care', component: CarePetOwnerComponent
            },
            {
                path: 'pets', component: PetsPetOwnerComponent
            },
            {
                path: 'pets/:id', component: PetProfileViewComponent
            }
        ]
    },
>>>>>>> 5012362db3bbb95fc71c25ead08c598461e1963c
]
