import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  
  getAllData(): Observable<any> {
    return this.http.get<any>(`${environment.homeApi}`);
  }
  getAllDataAdmin(): Observable<any> {
    return this.http.get<any>(`${environment.homeApi}/home-admin`);
  }

}