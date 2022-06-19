import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/sevices/local-storage.service';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { swalMessage } from 'src/app/shared/uiHelpers/swal/swal.module';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.scss'],
})
export class CartOrdersComponent implements OnInit {
  currentUser: any;
  orderData: any;
  items!: MenuItem[];
  cartTotal: number = 0;

  submitted: boolean = false;
  totalPrice: number = 0;

  constructor(
    private localS: LocalStorageService,
    private orderS: OrderService,
    private titleS: Title,
    private router: Router,
    private mess: MessageService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('userInfo')!);
    this.titleS.setTitle('Orders - ' + this.currentUser?.username);
    this.onGetCart();
    this.localS.watchStorage().subscribe((data) => {
      this.onGetCart();
    });
  }

  onGetCart() {
    this.orderData = this.localS.getItem();
    console.log('  this.orderData ',  this.orderData );
    
    this.cartTotal = this.orderData.reduce((a: any, b: any) => a + b.orderPrice, 0);
  }
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+84-?)|0)?[0-9]{11}$'),
    ]),
    address: new FormControl('', [Validators.required]),
    note: new FormControl('', []),
  });

  ngOnInit(): void {}

  addOrder() {
    let orderFinal: any = {
      ...this.userForm.value,
      products: this?.orderData,
      orderQuantity: this?.orderData.length,
      orderPrice: this?.orderData.price,
      totalPrice: this?.cartTotal,
      userInfo: this?.currentUser,
    };
    swalMessage('Hoàn thành đơn hàng?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.orderS.createOrderByUser(orderFinal).subscribe({
          next: (data) => {
            this.mess.add({
              severity: 'success',
              detail: 'Đặt hàng thành công',
            });
            setTimeout(() => {
              localStorage.removeItem('cart');
              this.router.navigate(['/']);
            }, 2000);
          }
        });
      }
    });
  }
}
