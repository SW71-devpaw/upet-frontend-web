import { Component } from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";
import {CommonModule} from "@angular/common";
import {AppointmentSchemaGet} from "../../../core/Appointment/schema/appointment.interface";
import {AppointmentService} from "../../../core/Appointment/services/appointment.service";
import {FormsModule} from "@angular/forms";
import {AppointmentCardComponent} from "./components/appointment-card/appointment-card.component";

@Component({
  selector: 'app-appointments-pet-owner',
  standalone: true,
  imports: [
    TabMenuModule,
    CommonModule,
    FormsModule,
    AppointmentCardComponent
  ],
  templateUrl: './appointments-pet-owner.component.html',
  styleUrl: './appointments-pet-owner.component.css'
})
export class AppointmentsPetOwnerComponent {
  views:{label:string,icon:string}[] = [];
  activeView: {label:string,icon:string} = {label: 'Upcoming', icon: 'pi pi-fw pi-bars'};

  upcomingAppointments: AppointmentSchemaGet[] = [];
  pastAppointments: AppointmentSchemaGet[] = [];

  constructor(private appointmentsService:AppointmentService) {
    this.views = [
      {label: 'Upcoming', icon: 'pi pi-fw pi-bars'},
      {label: 'Past', icon: 'pi pi-fw pi-clock'},
    ];
  }

  ngOnInit() {
    const petOwnerId = 2;
    this.appointmentsService.getPastAppointmentsByOwnerId(petOwnerId).subscribe((appointments) => {
      this.pastAppointments = appointments;
    });
    this.appointmentsService.getUpcomingAppointmentsByOwnerId(petOwnerId).subscribe((appointments) => {
      this.upcomingAppointments = appointments;
    });
  }

}
