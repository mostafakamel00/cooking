import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUlr = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getCooking(): Observable<any> {
    return this.http.get(`${this.apiUlr}c=Seafood`);
  }
  getChicken(): Observable<any> {
    return this.http.get(`${this.apiUlr}i=chicken`);
  }
  getCan(): Observable<any> {
    return this.http.get(`${this.apiUlr}a=Canadian`);
  }
  getHome(): Observable<any> {
    return this.http.get(`${this.apiUlr}i=chicken_breast`);
  }
}

// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
