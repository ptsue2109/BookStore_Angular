import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.authorApi}`);
  }
  getOne(id: string):Observable<any> {
    return this.http.get<any>(`${environment.authorApi}/get-author-by-id/${id}`);
  }
  remove(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.authorApi}/remove-author/${id}`);
  }
  addNew(item: any):Observable<any> {
    return this.http.post<any>(`${environment.authorApi}/create-author`,item);
  }
  editProduct(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.authorApi}/update-author/${id}`,item)
  }
  getAuthorBySlug(slug: string):Observable<any> {
    return this.http.get<any>(`${environment.authorApi}/get-author-by-slug/${slug}`);
  }
}
