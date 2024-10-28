import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpetApiService {

  private readonly baseUrl: string = 'https://upetbackendapi.onrender.com/api/v1'; 

  constructor(protected  http: HttpClient) {}

  protected getBaseUrl(): string {
    return this.baseUrl;
  }

  protected buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
}
