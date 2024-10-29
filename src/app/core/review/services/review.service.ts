import { Injectable } from '@angular/core';
import {UpetApiService} from "../../Api/UpetBackend/upet-api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewSchemaGet, ReviewSchemaPost} from "../schema/review.interface";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends UpetApiService {
  apiUrl: string;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = this.buildUrl('reviews');
  }

  getAllReviews():Observable<ReviewSchemaGet[]>{
    return this.http.get<ReviewSchemaGet[]>(this.apiUrl);
  }

  createReview(reviewData: ReviewSchemaPost, petOwnerId:number): Observable<ReviewSchemaGet> {
    return this.http.post<ReviewSchemaGet>(`${this.apiUrl}/${petOwnerId}`, reviewData);
  }
}
