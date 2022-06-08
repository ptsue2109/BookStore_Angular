import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  constructor(private http : HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.productApi}`);
  }
  getOneById(id: string):Observable<any> {
    return this.http.get<any>(`${environment.productApi}/${id}`);
  }
  getOneBySlug(slug:string):Observable<any>{
    return this.http.get<any>(`${environment.productApi}/${slug}`);
  }
  remove(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.productApi}/${id}`);
  }
  addNew(item: any):Observable<any> {
    return this.http.post<any>(`${environment.productApi}`,item);
  }
  editProduct(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.productApi}/${id}`,item)
  }


}