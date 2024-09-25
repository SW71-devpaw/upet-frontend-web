import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-owner',
  standalone: true,
  imports: [],
  templateUrl: './banner-owner.component.html',
  styleUrl: './banner-owner.component.css'
})
export class BannerOwnerComponent {
  userName: string = 'Josehp Herrera'; // Cambia esto por el nombre del usuario
}
