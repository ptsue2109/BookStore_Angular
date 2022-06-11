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

    const existItem = cartItems.find((item: any) => item._id === addItem._id);

    const countOrder = cartItems.length;
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
      existItem.price += addItem.price;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', countOrder);
    this.storageSubject.next('');
  }
}
