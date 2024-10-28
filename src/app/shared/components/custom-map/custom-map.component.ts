import {Component, Input, ViewChild} from '@angular/core';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow, MapMarker} from "@angular/google-maps";
import {MapMarkerCustom} from "./interfaces/MapMarkerCustom";

@Component({
  selector: 'app-custom-map',
  standalone: true,
  imports: [
    GoogleMap,
    MapMarker
  ],
  templateUrl: './custom-map.component.html',
  styleUrl: './custom-map.component.css'
})
export class CustomMapComponent {
  @Input() closeDialog!: () => void;
  @Input() markers: MapMarkerCustom[] = [];
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  center:google.maps.LatLngLiteral = {lat: 51.678418, lng: 7.809007};
  zoom:number = 15;
  constructor() {}

  ngOnInit(){
    this.myLocation();
  }
  onMarkerClick(marker: MapAdvancedMarker) {
    this.infoWindow.open(
      marker
    );
  }

  myLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
  }
}