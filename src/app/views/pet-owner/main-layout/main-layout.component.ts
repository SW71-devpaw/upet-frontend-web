import { Component } from '@angular/core';
import {BannerOwnerComponent} from "../home-pet-owner/components/banner-owner/banner-owner.component";
import {ListOwnerPetsComponent} from "../home-pet-owner/components/list-owner-pets/list-owner-pets.component";
import {
    ListScpecialistsNearbyComponent
} from "../home-pet-owner/components/list-scpecialists-nearby/list-scpecialists-nearby.component";

import {NgClass} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    BannerOwnerComponent,
    ListOwnerPetsComponent,
    ListScpecialistsNearbyComponent,
    NavBarComponent,
    SidebarComponent,
    NgClass,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isSidebarCollapsed=false;

  onSidebarToggle(isCollapsed:boolean){
    this.isSidebarCollapsed = isCollapsed
  }

}
