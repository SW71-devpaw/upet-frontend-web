import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { navigateTo } from '../shared/auth.utils';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  register(){
    this.authService.register(this.registerForm.value)
    .subscribe((response) => {
      console.log('Registro exitoso', response);
      navigateTo(response.access_token, this.router);
    },
    (error) => {  // Manejo de errores
      console.error('Error en el registro', error);
    }
  );
  }

  onSubmit() {
    this.submitted = true;  // Cambia el estado de envío a verdadero
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      this.register();
    } else {
      console.log('Form is invalid');
    }
  }
}
