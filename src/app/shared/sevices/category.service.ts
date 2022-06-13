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
  getAllActive():Observable<any> {
    return this.http.get<any>(`${environment.categoryApi}/list-active`);
  }
  getCateBySlug(slug: string):Observable<any> {
    return this.http.get<any>(`${environment.categoryApi}/get-detail-by-slug/${slug}`);
  }
  removeCate(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.categoryApi}/remove-cate/${id}`);
  }
  addCate(item: any):Observable<any> {
    return this.http.post<any>(`${environment.categoryApi}/create`,item);
  }
  editCate(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.categoryApi}/update-cate/${id}`,item)
  }
  getCateById(id: string):Observable<any>{
    return this.http.get<any>(`${environment.categoryApi}/get-cate-by-id/${id}`);
  }
}