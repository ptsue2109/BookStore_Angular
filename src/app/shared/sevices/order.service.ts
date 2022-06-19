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
  getUserOrder(id:any):Observable<any>{
    return this.http.get<any>(`${environment.orderApi}/get-user-order/${id}`);
  }

  //get order data
  getOrderByOrderCode(orderCode:any):Observable<any>{
    return this.http.get<any>(`${environment.orderApi}/get-order-by-orderCode/${orderCode}`);
  }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.orderApi}`);
  }

  getOrderByPhone(phoneNumber:string):Observable<any>{
    return this.http.get<any>(`${environment.orderApi}/get-order-by-phone/${phoneNumber}`);
  }
  getOrderById(id:string):Observable<any>{
    return this.http.get<any>(`${environment.orderApi}/get-order-by-id/${id}`);
  }
  updateOrder(item:any, orderCode:string):Observable<any>{
    return this.http.patch<any>(`${environment.orderApi}/change-order/${orderCode}`,item);
  }
  deleteOrder(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.orderApi}/delete-order/${id}`);
  }
}
