import {Component, Input} from '@angular/core';
import {MedicalResultResponse} from "../../../../../core/networking/response/MedicalResultResponse";
import {MedicalHistoriesApiService} from "../../../../../core/networking/services/medical-histories-api.service";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import {NgForOf} from "@angular/common";
import {DividerModule} from "primeng/divider";
import {MedicalResultRequest} from "../../../../../core/networking/request/MedicalResultRequest";
import {formatDateToYYYYMMDD} from "../../../../helpers/date.formater";

@Component({
  selector: 'app-medical-results',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    NgForOf,
    DividerModule,
    ReactiveFormsModule
  ],
  templateUrl: './medical-results.component.html',
  styleUrl: './medical-results.component.css'
})
export class MedicalResultsComponent {
  medicalResults: MedicalResultResponse[] = []
  @Input() medicalHistoryId: number | undefined;
  myForm:FormGroup = new FormGroup({});

  constructor(
    private medicalService:MedicalHistoriesApiService,
    private fb: FormBuilder
  ) {
  }
  ngOnInit() {
      this.medicalService.getMedicalResultsByMedicalHistoryId(this.medicalHistoryId!)
        .subscribe(results => {
          this.medicalResults = results.reverse();
        });

      this.myForm = this.fb.group({
        resultDate: [new Date()],
        resultType: [''],
        description: ['']
      });
  }

  submit() {
    let request:MedicalResultRequest = {
      medicalHistoryId: this.medicalHistoryId!,
      resultDate: formatDateToYYYYMMDD(this.myForm.value.resultDate),
      resultType: this.myForm.value.resultType,
      description: this.myForm.value.description
    }
    this.medicalService.createMedicalResult(request, this.medicalHistoryId!)
      .subscribe(() => {
        alert('Medical result created successfully');
        window.location.reload();
      });
  }
}
