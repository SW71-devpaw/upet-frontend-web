import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  roles = ['Veterinarian', 'Pet Owner'];
  submitted = false;  // Para controlar el estado de envío del formulario

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;  // Cambia el estado de envío a verdadero

    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Aquí puedes añadir la lógica para enviar el formulario a tu backend
    } else {
      console.log('Form is invalid');
    }
  }
}
