import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.sliderApi}`);
  }
  getOne(id: string):Observable<any> {
    return this.http.get<any>(`${environment.sliderApi}/${id}`);
  }
  remove(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.sliderApi}/${id}`);
  }
  addNew(item: any):Observable<any> {
    return this.http.post<any>(`${environment.sliderApi}`,item);
  }
  editProduct(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.sliderApi}/${id}`,item)
  }



}