import {Component, Input} from '@angular/core';
import {SurgeryResponse} from "../../../../../core/networking/response/SurgeryResponse";
import {MedicalHistoriesApiService} from "../../../../../core/networking/services/medical-histories-api.service";
import {VaccineResponse} from "../../../../../core/networking/response/VaccineResponse";
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgForOf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {VaccineRequest} from "../../../../../core/networking/request/VaccineRequest";
import {formatDateToYYYYMMDD} from "../../../../helpers/date.formater";

@Component({
  selector: 'app-vaccines',
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
  templateUrl: './vaccines.component.html',
  styleUrl: './vaccines.component.css'
})
export class VaccinesComponent {
  vaccines:VaccineResponse[] = [];
  @Input() medicalHistoryId: number | undefined;
  myForm:FormGroup = new FormGroup({});
  constructor(
    private medicalService:MedicalHistoriesApiService,
    private fb:FormBuilder
  ) {
  }
  ngOnInit() {
    this.medicalService.getVaccinesByMedicalHistoryId(this.medicalHistoryId!)
      .subscribe(results => {
        this.vaccines = results.reverse();
      });
    this.myForm = this.fb.group({
      name: [''],
      vaccineDate: [new Date()],
      vaccineType: [''],
      dose: [''],
      location: [''],
    });
  }

  submit(){
    let request:VaccineRequest = {
      name : this.myForm.value.name,
      vaccineDate : formatDateToYYYYMMDD(this.myForm.value.vaccineDate),
      vaccineType : this.myForm.value.vaccineType,
      dose : this.myForm.value.dose,
      location : this.myForm.value.location,
      medicalHistoryId : this.medicalHistoryId!
    }
    this.medicalService.createVaccine(request, this.medicalHistoryId!)
      .subscribe(() => {
          alert('Vaccine created successfully');
          window.location.reload();
      });
  }

}
