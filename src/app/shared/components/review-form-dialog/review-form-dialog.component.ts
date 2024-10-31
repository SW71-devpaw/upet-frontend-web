import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SliderModule} from "primeng/slider";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-review-form-dialog',
  standalone: true,
  imports: [
    Button,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    SliderModule,
    InputTextareaModule
  ],
  templateUrl: './review-form-dialog.component.html',
  styleUrl: './review-form-dialog.component.css'
})
export class ReviewFormDialogComponent {
  @Input() closeDialog!: () => void;
  myForm:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      stars: new FormControl(0),
      description: new FormControl(''),
    });

  }
  submitReview(){}

}
