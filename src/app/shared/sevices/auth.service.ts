import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  constructor(private http: HttpClient, private router: Router) {}
  authLogin(item:any): Observable<any> {
      return this.http.post<any>(`${environment.authApi}/login`,item)
      }
  authRegister(item:any): Observable<any> {
    return this.http.post<any>(`${environment.authApi}/register`,item);
  }
}