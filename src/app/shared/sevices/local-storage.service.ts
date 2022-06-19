import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  setItem(addItem: any) {
    const cartItems = this.getItem();
    console.log(cartItems);

    const existItem = cartItems.find((item: any) => item.products._id === addItem.products._id);
    if (existItem) {
      existItem.orderQuantity += addItem.orderQuantity;
      existItem.orderPrice = existItem.orderQuantity * existItem.orderPrice;
    } else {
      cartItems.push(addItem);
    }
    this.setCart(cartItems);
  }
  setCart(cartData: any) {
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.storageSubject.next('');
  }
}
