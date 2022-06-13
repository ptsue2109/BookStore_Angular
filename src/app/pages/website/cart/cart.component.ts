import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/sevices/local-storage.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { swal, swalMessage } from 'src/app/shared/uiHelpers/swal/swal.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartData: any[] = [];
  cartTotal: any;
  constructor(
    private lsService: LocalStorageService,
    private router: Router,
    private title: Title,
    private MessageService: MessageService
  ) {}

  ngOnInit(): void {
    this.onGetCart();
    this.lsService.watchStorage().subscribe((data) => {
      this.onGetCart();
    });
    this.title.setTitle('Cart');
  }

  onGetCart() {
    this.cartData = this.lsService.getItem();
    this.cartTotal = this.cartData.reduce((a: any, b: any) => a + b.price, 0);
  }
  decreaseQuantity(_id: any) {
    const existItem = this.cartData.find((item: any) => item._id === _id);
    console.log(existItem);
    if (existItem) {
      existItem.quantity -= 1;
      if (existItem.quantity <= 1) {
        existItem.quantity = 1;
        existItem.price = existItem.cost * existItem.quantity;
      }
    }
    this.lsService.setCart(this.cartData);
  }

  increaseQuantity(_id: any) {
    const existItem = this.cartData.find((item: any) => item._id === _id);
    console.log(existItem);
    if (existItem) {
      existItem.quantity += 1;
      existItem.price = existItem.cost * existItem.quantity;
    }
    this.lsService.setCart(this.cartData);
  }

  removeCartItem(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.cartData = this.cartData.filter((item: any) => item._id !== _id);
        this.lsService.setCart(this.cartData);
      }
      swal('delete', 'You delete successfully !', 'success');
    });
  }
  thanhToan() {
    this.MessageService.add({
      severity: 'success',
      detail: 'Add item in your cart',
    });
    setTimeout(() => {
      this.router.navigate(['/orders']);
    }, 3000);
  }
}
