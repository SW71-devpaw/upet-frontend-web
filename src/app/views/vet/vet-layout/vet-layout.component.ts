import { Component } from '@angular/core';
import {NavBarComponent} from "../../../shared/components/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-vet-layout',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
    SidebarComponent,
    NgClass
  ],
  templateUrl: './vet-layout.component.html',
  styleUrl: './vet-layout.component.css'
})
export class VetLayoutComponent {
  isSidebarCollapsed=false;
  options = [
    { label: 'Home', icon: 'pi pi-home', link: '/pet-owner/home' },
    { label: 'Booking', icon: 'pi pi-wifi', link: '/pet-owner/pets' },
    {label: 'Reviews', icon:'pi pi-building', link: '/pet-owner/clinics'},
    { label: 'Notifications', icon: 'pi pi-book', link: '/pet-owner/appointments' },
    { label: 'Profile', icon: 'pi pi-user', link: '/pet-owner/profile' },
    { label: 'Logout', icon: 'pi pi-sign-out', link: '#', action: 'logout' }
  ];
  onSidebarToggle(isCollapsed:boolean){
    this.isSidebarCollapsed = isCollapsed
  }
}
