import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SliderModule} from "primeng/slider";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReviewService} from "../../../core/review/services/review.service";
import {ReviewSchemaPost} from "../../../core/review/schema/review.interface";

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
  @Input() vetId!: number;
  myForm:FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private reviewService:ReviewService
    ) {

    this.myForm = this.fb.group({
      stars: new FormControl(0),
      description: new FormControl(''),
    });

  }
  submitReview(){
    let request:ReviewSchemaPost = {
      stars: this.myForm.value.stars,
      description: this.myForm.value.description,
      veterinarian_id: this.vetId
    }
    console.log("Review", request);

    //TODO: Actualizar el petownerId
    const petOwnerId = 1;
    this.reviewService.createReview(petOwnerId, request).subscribe(() => {
      alert('Review created');
      this.closeDialog();
    });
  }

}
