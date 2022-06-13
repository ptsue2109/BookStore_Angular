import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TargetsService {

  constructor(private http : HttpClient ) { 
  }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.targetApi}`,);
  }
  getBookByTarget(id: string):Observable<any>{
    return this.http.get<any>(`${environment.targetApi}/find-book-by-id/${id}`);
  }
}
