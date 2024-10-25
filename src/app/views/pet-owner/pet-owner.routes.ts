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
]

