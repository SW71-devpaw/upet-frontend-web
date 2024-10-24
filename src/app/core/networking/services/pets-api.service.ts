import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PetResponse} from "../response/PetResponse";
import {BASE_PATH_API} from "../constants/base-path-api";

@Injectable({
  providedIn: 'root'
})
export class PetsApiService {
  basePath = BASE_PATH_API;

  constructor(private http:HttpClient) {}

  getMyPets(petOwnerId:number):Observable<PetResponse[]>{
    const resource = `/api/v1/pets/${petOwnerId}`;
    let pets:PetResponse[] = [];
    return this.http.get<PetResponse[]>(`${this.basePath}${resource}`);
  }

  deletePet(petId:number){
    const resource = `/api/v1/pets/${petId}`;
    return this.http.delete(`${this.basePath}${resource}`);
  }
  createPet(petData:any, petOwnerId:number){
    const resource = `/api/v1/pets/${petOwnerId}`;
    return this.http.post(`${this.basePath}${resource}`, petData);
  }
  updatePet(petData:any, petId:number){
    const resource = `/api/v1/pets/${petId}`;
    return this.http.put(`${this.basePath}${resource}`, petData);
  }
  getPetById(petId:number):Observable<PetResponse>{
    const resource = `/api/v1/pets/pet/${petId}`;
    return this.http.get<PetResponse>(`${this.basePath}${resource}`);
  }
}
