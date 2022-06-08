import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.categoryApi}`);
  }
  getOneCate(id: string):Observable<any> {
    return this.http.get<any>(`${environment.categoryApi}/${id}/edit`);
  }
  removeCate(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.categoryApi}/${id}`);
  }
  addCate(item: any):Observable<any> {
    return this.http.post<any>(`${environment.categoryApi}`,item);
  }
  editCate(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.categoryApi}/${id}`,item)
  }
}