import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  isCollapsed = false;

  options = [
    { label: 'Home', icon: 'pi pi-home', link: '/pet-owner/home' },
    { label: 'Pets', icon: 'pi pi-wifi', link: '/pet-owner/pets' },
    {label: 'Clinics', icon:'pi pi-building', link: '/pet-owner/clinics'},
    { label: 'Appointments', icon: 'pi pi-book', link: '/pet-owner/appointments' },
    { label: 'Notifications', icon: 'pi pi-bell', link: '/pet-owner/home' },
    { label: 'Perfil', icon: 'pi pi-user', link: '/pet-owner/profile' },
    { label: 'Cerrar sesión', icon: 'pi pi-sign-out', link: '#', action: 'logout' }
  ];

  constructor(private router: Router) {
  }

  logout() {
    localStorage.clear();
    alert('Se ha cerrado la sesión correctamente.');
    this.router.navigate(['/auth/login']).then(r => r);
  }

  handleOptionClick(option: any) {
    if (option.action === 'logout') {
      this.logout();
    } else {
      this.collapseSidebar();
    }
  }

  collapseSidebar(){
    this.isCollapsed = true;
    this.sidebarToggle.emit(this.isCollapsed);
  }

  expandSidebar(){
    this.isCollapsed = false;
    this.sidebarToggle.emit(this.isCollapsed);
  }



}
