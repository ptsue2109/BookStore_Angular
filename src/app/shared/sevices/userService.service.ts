import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<any> {
    return this.http.get<any>(`${environment.userApi}`);
  }
  getOneUser(id: string):Observable<any> {
    return this.http.get<any>(`${environment.userApi}/get-user-by-id/${id}`);
  }
  removeUSer(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.userApi}/remove-user/${id}`);
  }
  addUsers(item: any):Observable<any> {
    return this.http.post<any>(`${environment.userApi}/create-user`,item);
  }
  editUser(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.userApi}/update-user/${id}`,item)
  }
 
}