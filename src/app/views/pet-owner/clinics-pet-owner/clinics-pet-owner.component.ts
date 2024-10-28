import { Component } from '@angular/core';
import {VetClinicResponse} from "../../../core/networking/response/VetClinicResponse";
import {MapMarkerCustom} from "../../../shared/components/custom-map/interfaces/MapMarkerCustom";
import {VetClinicsApiService} from "../../../core/networking/services/vet-clinics-api.service";
import {ClinicCardComponent} from "../../../shared/components/clinic-card/clinic-card.component";
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {CustomMapComponent} from "../../../shared/components/custom-map/custom-map.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-clinics-pet-owner',
  standalone: true,
  imports: [
    ClinicCardComponent,
    Button,
    DialogModule,
    CustomMapComponent,
    NgForOf
  ],
  templateUrl: './clinics-pet-owner.component.html',
  styleUrl: './clinics-pet-owner.component.css'
})
export class ClinicsPetOwnerComponent {
  clinics: VetClinicResponse[] = [];
  visibleMapDialog = false;
  markers: MapMarkerCustom[] = [];

  constructor(private clinicsApiService: VetClinicsApiService) {
  }

  ngOnInit() {
    this.clinicsApiService.getAllClinics().subscribe((clinics: VetClinicResponse[]) => {
      this.clinics = clinics;
      this.markers = clinics.map((clinic: VetClinicResponse): MapMarkerCustom =>
          this.parseClinicToMarker(clinic));
      console.log("markers", this.markers);
    });
  }

  parseClinicToMarker(clinic: VetClinicResponse): MapMarkerCustom {
    let coords = clinic.location.split(',');
    return {
      name: clinic.name,
      coords: {
        lat: parseFloat(coords[0]),
        lng: parseFloat(coords[1])
      },
      iconUrl: clinic.image_url
    }
  }

  closeMapDialog() {
    this.visibleMapDialog = false;
  }

  openMapDialog() {
    this.visibleMapDialog = true;
  }
}
