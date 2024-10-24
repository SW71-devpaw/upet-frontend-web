import { Injectable } from '@angular/core';
import {BASE_PATH_API} from "../constants/base-path-api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalHistoryResponse} from "../response/MedicalHistoryResponse";
import {MedicalResultResponse} from "../response/MedicalResultResponse";
import {DiseaseResponse} from "../response/DiseaseResponse";
import {SurgeryResponse} from "../response/SurgeryResponse";
import {MedicalResultRequest} from "../request/MedicalResultRequest";
import {DiseaseRequest} from "../request/DiseaseRequest";
import {VaccineRequest} from "../request/VaccineRequest";
import {VaccineResponse} from "../response/VaccineResponse";
import {SurgeryRequest} from "../request/SurgeryRequest";

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoriesApiService {
  path = `${BASE_PATH_API}/api/v1/medicalhistories`;

  constructor(private http:HttpClient) {}

  getMedicalHistoryByPetId(petId: number):Observable<MedicalHistoryResponse> {
      return this.http.get<MedicalHistoryResponse>(`${this.path}/pet/${petId}`);
  }

  getMedicalResultsByMedicalHistoryId(medicalHistoryId: number):Observable<MedicalResultResponse[]> {
      return this.http.get<MedicalResultResponse[]>(`${this.path}/${medicalHistoryId}/medicalresults`);
  }

  getDiseasesByMedicalHistoryId(medicalHistoryId: number):Observable<DiseaseResponse[]> {
      return this.http.get<DiseaseResponse[]>(`${this.path}/${medicalHistoryId}/diseases`);
  }

  getSurgeriesByMedicalHistoryId(medicalHistoryId: number):Observable<SurgeryResponse[]> {
      return this.http.get<SurgeryResponse[]>(`${this.path}/${medicalHistoryId}/surgeries`);
  }

  getVaccinesByMedicalHistoryId(medicalHistoryId: number):Observable<VaccineResponse[]> {
      return this.http.get<VaccineResponse[]>(`${this.path}/${medicalHistoryId}/vaccines`);
  }

  createMedicalResult(data:MedicalResultRequest, medicalHistoryId:number){
    return this.http.post(`${this.path}/${medicalHistoryId}/medicalresults`, data,);
  }
  createDisease(data:DiseaseRequest, medicalHistoryId:number){
    return this.http.post(`${this.path}/${medicalHistoryId}/diseases`, data);
  }
  createSurgery(data:SurgeryRequest, medicalHistoryId:number){
    return this.http.post(`${this.path}/${medicalHistoryId}/surgeries`, data);
  }
  createVaccine(data:VaccineRequest, medicalHistoryId:number){
    return this.http.post(`${this.path}/${medicalHistoryId}/vaccines`, data);
  }
}
