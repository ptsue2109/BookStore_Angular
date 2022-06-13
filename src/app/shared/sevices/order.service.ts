import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }
  createOrderByUser(order:any):Observable<any>{
    return this.http.post<any>(`${environment.orderApi}/creat-by-custom`,order);
  }
  getCartData(id:any):Observable<any>{
    return this.http.get<any>(`${environment.orderApi}/list-cart/${id}`);
  }
}
