import {Route} from "@angular/router";
import {PetOwnerLayoutComponent} from "../pet-owner/pet-owner-layout/pet-owner-layout.component";
import {HomePetOwnerComponent} from "../pet-owner/home-pet-owner/home-pet-owner.component";
import {CarePetOwnerComponent} from "../pet-owner/care-pet-owner/care-pet-owner.component";
import {PetsPetOwnerComponent} from "../pet-owner/pets-pet-owner/pets-pet-owner.component";
import {PetProfileViewComponent} from "../../shared/views/pet-profile-view/pet-profile-view.component";
import {ClinicsPetOwnerComponent} from "../pet-owner/clinics-pet-owner/clinics-pet-owner.component";
import {ClinicProfileComponent} from "../../shared/views/clinic-profile/clinic-profile.component";
import {VetPublicProfileComponent} from "../../shared/views/vet-public-profile/vet-public-profile.component";
import {AppointmentsPetOwnerComponent} from "../pet-owner/appointments-pet-owner/appointments-pet-owner.component";
import {ProfilePetOwnerComponent} from "../pet-owner/profile-pet-owner/profile-pet-owner.component";
import {VetLayoutComponent} from "./vet-layout/vet-layout.component";
import {HomeVetComponent} from "./home-vet/home-vet.component";

export const VET_ROUTES: Route[] = [
  {
    path: "vets", component: VetLayoutComponent, children: [
      {
        path: 'home', component: HomeVetComponent
      },
      {
        path: 'pets/:id', component: PetProfileViewComponent
      },
    ]
  },
]
