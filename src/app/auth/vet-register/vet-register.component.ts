import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vet-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vet-register.component.html',
  styleUrl: './vet-register.component.css'
})
export class VetRegisterComponent {
// Estado del formulario
isVetRegister: boolean = true; // true para el formulario del veterinario, false para el de la clínica

// Datos para el registro del veterinario
clinicName: string = '';
otp_password: string = '';

// Datos para el registro de la clínica
name: string = '';
location: string = '';
phone_number: string = '';
description: string = '';
office_hours_start: string = '';
office_hours_end: string = '';

// Método para alternar entre formularios
// Método para alternar entre formularios


// Método de registro para veterinario
registerVet() {
  const vetData = {
    clinicName: this.clinicName,
    otp_password: this.otp_password,
  };
  // Aquí puedes hacer la llamada a tu servicio para registrar al veterinario
  console.log('Register Vet:', vetData);
}

// Método de registro para clínica
registerClinic() {
  const clinicData = {
    name: this.name,
    location: this.location,
    phone_number: this.phone_number,
    description: this.description,
    office_hours_start: this.office_hours_start,
    office_hours_end: this.office_hours_end,
  };
  // Aquí puedes hacer la llamada a tu servicio para registrar la clínica
  console.log('Register Clinic:', clinicData);
}

// Otras propiedades...

showVetForm() {
  this.isVetRegister = true;
}

showClinicForm() {
  this.isVetRegister = false;
}

toggleForm() {
  this.isVetRegister = !this.isVetRegister;
}

}
