import { Component } from '@angular/core';
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pet-owner-layout',
  standalone: true,
  imports: [
    NavBarComponent,
    SidebarComponent,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './pet-owner-layout.component.html',
  styleUrl: './pet-owner-layout.component.css'
})
export class PetOwnerLayoutComponent {
  isSidebarCollapsed=false;

  onSidebarToggle(isCollapsed:boolean){
    this.isSidebarCollapsed = isCollapsed
  }
}
