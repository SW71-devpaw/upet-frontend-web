import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./shared/config/firebase.config";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {NavBarComponent} from "./shared/components/nav-bar/nav-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularFireModule,
    SidebarComponent,
    NgClass,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upet-frontend-web';

  isSidebarCollapsed=false;

  onSidebarToggle(isCollapsed:boolean){
    this.isSidebarCollapsed = isCollapsed
  }

}
