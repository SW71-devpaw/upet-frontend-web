import {Component} from '@angular/core';
import {AuthService} from "../../../core/auth/services/auth.service";
import {UserType} from "../../../core/auth/enum/UserType.enum";
import {NotificationService} from "../../../core/Notification/services/notification.service";
import {NotificationSchemaGet} from "../../../core/Notification/schema/notification.interface";
import {NotificationCardComponent} from "./components/notification-card/notification-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {formatDateToYYYYMMDDHHMM} from "../../helpers/date.formater";

@Component({
  selector: 'app-notifications-view',
  standalone: true,
  imports: [
    NotificationCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './notifications-view.component.html',
  styleUrl: './notifications-view.component.css'
})
export class NotificationsViewComponent {

  timerNotificationsId:any;
  notifications:NotificationSchemaGet[] = [];

  constructor(
    private authService:AuthService,
    private notificationsService:NotificationService
    ) {
    this.notificationsService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
    const aux = this.notifications.map((notification) => {
      notification.datetime = formatDateToYYYYMMDDHHMM(new Date(notification.datetime));
      return notification;
    });
    this.notifications = [...aux];
    console.log(aux);
  }
  getNotifications(){
    const role = this.authService.getRole();
    const userId = this.authService.decodeToken()?.user_id!;
    if(role==UserType.Owner){
      this.timerNotificationsId = setInterval(() => {
        this.notificationsService.getNotificationsByPetOwnerId(userId).subscribe((notifications)=>{
          this.notifications = notifications;
        });
      },1000);

    }
    else if(role==UserType.Vet){
      this.timerNotificationsId = setInterval(() => {
        this.notificationsService.getNotificationsByVeterinaryId(userId).subscribe((notifications)=>{
          this.notifications = notifications;
        });
      },1000);
    }
  }
}
