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
    return this.http.get<any>(`${environment.productApi}/find-book-by-id/${id}`);
  }
  getOneBySlug(slug:string):Observable<any>{
    return this.http.get<any>(`${environment.productApi}/find-book-by-slug/${slug}`);
  }
  remove(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.productApi}/remove-book/${id}`);
  }
  addNew(item: any):Observable<any> {
    return this.http.post<any>(`${environment.productApi}/create-book`,item);
  }
  editProduct(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.productApi}/update-book/${id}`,item)
  }


}