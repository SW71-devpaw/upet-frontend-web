import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ReviewSchemaPost} from "../../../core/review/schema/review.interface";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-appointment-form-dialog',
  standalone: true,
  imports: [
    Button,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule
  ],
  templateUrl: './appointment-form-dialog.component.html',
  styleUrl: './appointment-form-dialog.component.css'
})
export class AppointmentFormDialogComponent {
  @Input() visible: boolean = false;
  @Input() onClose!: ()=>void;

  cities: {name:string,code:string}[] | undefined;
  selectedCity: {name:string,code:string} | undefined;
  myForm:FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      date_day: new FormControl(''),
      description: new FormControl(''),
      start_time: new FormControl('')
    });
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  submitAppointment(){}

}
