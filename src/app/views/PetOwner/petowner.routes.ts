import { Routes } from "@angular/router";
import { HomePetOwnerComponent } from "./home/home-pet-owner.component";
import { CarePetOwnerComponent } from "./care-pet-owner/care-pet-owner.component";
import { LayoutPetownerComponent } from "./layout/layout-petowner.component";


export const PETOWNER_ROUTES: Routes =[
{   
    path: 'pet-owner', component: LayoutPetownerComponent, children: [
        {path: 'home', component: HomePetOwnerComponent },
        {path: 'care', component: CarePetOwnerComponent},
    ] 
},
]