import { Injectable } from '@angular/core';
import {VetClinicResponse} from "../response/VetClinicResponse";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BASE_PATH_API} from "../constants/base-path-api";

@Injectable({
  providedIn: 'root'
})
export class VetClinicsApiService {
  path = `${BASE_PATH_API}/api/v1/veterinary_clinics`;

  constructor(private http:HttpClient) {}

  getClinicById(clinicId:number):Observable<VetClinicResponse>{
    return this.http.get<VetClinicResponse>(`${this.path}/${clinicId}`);
  }
  getAllClinics():Observable<VetClinicResponse[]>{
    return this.http.get<VetClinicResponse[]>(`${this.path}`);
  }
}
