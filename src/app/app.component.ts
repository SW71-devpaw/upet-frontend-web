import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./shared/config/firebase.config";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularFireModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upet-frontend-web';
}
