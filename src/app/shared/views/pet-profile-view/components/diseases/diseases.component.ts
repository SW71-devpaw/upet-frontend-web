import {Component, Input, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgForOf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {MedicalResultResponse} from "../../../../../core/networking/response/MedicalResultResponse";
import {MedicalHistoriesApiService} from "../../../../../core/networking/services/medical-histories-api.service";
import {DiseaseResponse} from "../../../../../core/networking/response/DiseaseResponse";
import {DiseaseRequest} from "../../../../../core/networking/request/DiseaseRequest";
import {formatDateToYYYYMMDD} from "../../../../helpers/date.formater";

@Component({
  selector: 'app-diseases',
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
  templateUrl: './diseases.component.html',
  styleUrl: './diseases.component.css'
})
export class DiseasesComponent implements OnInit {
  diseases: DiseaseResponse[] = []
  @Input() medicalHistoryId: number | undefined;

  // @ts-ignore
  myForm: FormGroup;

  constructor(
    private medicalService: MedicalHistoriesApiService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.medicalService.getDiseasesByMedicalHistoryId(this.medicalHistoryId!)
      .subscribe(results => {
        this.diseases = results.reverse();
      });

    this.myForm = this.fb.group({
      name: [''],
      diagnosisDate: [new Date()],
      severity: ['']
    });
  }

  submit() {
    let request:DiseaseRequest = {
      name: this.myForm.value.name,
      diagnosisDate: formatDateToYYYYMMDD(this.myForm.value.diagnosisDate),
      severity: this.myForm.value.severity,
      medicalHistoryId: this.medicalHistoryId!
    }
    this.medicalService.createDisease(request, this.medicalHistoryId!)
      .subscribe(() => {
        alert('Disease created');
        window.location.reload();
      });
  }
}
