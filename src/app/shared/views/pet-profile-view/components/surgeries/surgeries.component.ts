import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgForOf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {MedicalHistoriesApiService} from "../../../../../core/networking/services/medical-histories-api.service";
import {SurgeryResponse} from "../../../../../core/networking/response/SurgeryResponse";
import {SurgeryRequest} from "../../../../../core/networking/request/SurgeryRequest";
import {formatDateToYYYYMMDD} from "../../../../helpers/date.formater";

@Component({
  selector: 'app-surgeries',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DividerModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    NgForOf,
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './surgeries.component.html',
  styleUrl: './surgeries.component.css'
})
export class SurgeriesComponent {
  surgeries:SurgeryResponse[] = [];
  @Input() medicalHistoryId: number | undefined;
  myForm:FormGroup = new FormGroup({});

  constructor(
    private medicalService:MedicalHistoriesApiService,
    private fb: FormBuilder
  ) {
  }
  ngOnInit() {
    this.medicalService.getSurgeriesByMedicalHistoryId(this.medicalHistoryId!)
      .subscribe(results => {
        this.surgeries = results.reverse();
      });
    this.myForm = this.fb.group({
      surgeryDate: [new Date()],
      description: [''],
    });
  }
  submit(){
    let request:SurgeryRequest = {
      surgeryDate: formatDateToYYYYMMDD(this.myForm.value.surgeryDate),
      description: this.myForm.value.description,
      medicalHistoryId: this.medicalHistoryId!
    }
    this.medicalService.createSurgery(request, this.medicalHistoryId!)
      .subscribe(() => {
        alert('Surgery created successfully');
        window.location.reload();
      });
  }
}
