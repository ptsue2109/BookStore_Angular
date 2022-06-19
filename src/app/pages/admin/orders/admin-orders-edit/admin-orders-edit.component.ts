import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { HomeService } from 'src/app/shared/sevices/homeService.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  swalMessage,
  swal,
} from './../../../../shared/uiHelpers/swal/swal.module';
import { LocalStorageService } from 'src/app/shared/sevices/local-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-orders-edit',
  templateUrl: './admin-orders-edit.component.html',
  styleUrls: ['./admin-orders-edit.component.scss'],
})
export class AdminOrdersEditComponent implements OnInit {
  orderCode: string = '';
  order: any;
  totalPrice: number = 0;
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+84-?)|0)?[0-9]{11}$'),
    ]),
    address: new FormControl('', [Validators.required]),
    note: new FormControl('', []),
    storeNote: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private $title: Title,
    private $orderS: OrderService,
    private $homeS: HomeService,
    private $activeR: ActivatedRoute,
    private $router: Router,
    private $messS: MessageService
  ) {
    this.changeTotalPrice();
  }

  ngOnInit(): void {
    this.orderCode = this.$activeR.snapshot.params['orderCode'];
    this.$orderS.getOrderByOrderCode(this.orderCode).subscribe((data) => {
      this.order = data;
      this.totalPrice = data.totalPrice;
    });
  }
  changeTotalPrice() {
    return (this.totalPrice = this.order?.products.reduce(
      (a: any, b: any) => a + b.orderPrice,
      0
    ));
  }
  changeUserOrderInfo() {
    let userChange = this.userForm.value;
    let productsChange = { ...this.order };
    let orderFinal = {
      ...userChange,
      ...productsChange,
      totalPrice: this.totalPrice,
    };
    console.log('orderFinal', orderFinal);

    swalMessage(
      'Điều này sẽ thay đổi thông tin nhận hàng, bạn có chắc không?',
      'Ok',
      'Cancel'
    ).then((result) => {
      if (result.isConfirmed) {
        this.$orderS
          .updateOrder(orderFinal, this.orderCode)
          .subscribe((data) => {
            this.$messS.add({
              severity: 'success',
              summary: 'success',
              detail: 'update success',
            });
            setTimeout(() => {
              this.$router.navigate(['/admin/orders']);
            }, 2000);
          });
      }
    });
  }

  decreaseQuantity(_id: string) {
    const existItem = this.order.products.find(
      (item: any) => item.products._id === _id
    );
    console.log('hehe', existItem);
    if (existItem) {
      existItem.orderQuantity -= 1;
      if (existItem.orderQuantity <= 1) {
        existItem.orderQuantity = 1;
        existItem.orderPrice =
          existItem.products.cost * existItem.orderQuantity;
      }
    }
    this.totalPrice = this.totalPrice = this.order?.products.reduce(
      (a: any, b: any) => a + b.orderPrice,
      0
    );
  }

  increaseQuantity(_id: string) {
    const existItem = this.order.products.find(
      (item: any) => item.products._id === _id
    );
    console.log('hehe', existItem);
    if (existItem) {
      console.log('quantity', existItem.products.stock);
      if (existItem.orderQuantity >= existItem.products.stock) {
        console.log(existItem.orderQuantity, existItem.products.stock);
        this.$messS.add({
          severity: 'info',
          summary: 'Đặt lại',
          detail: `Hàng trong kho không đủ, tối đa ${existItem.products.stock} quyển `,
        });
        existItem.orderQuantity = existItem.orderQuantity;
      } else {
        existItem.orderQuantity += 1;
        existItem.orderPrice =
          existItem.products.cost * existItem.orderQuantity;
      }
    }
    this.totalPrice = this.totalPrice = this.order?.products.reduce(
      (a: any, b: any) => a + b.orderPrice,
      0
    );
  }

  deleteProducts(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.order.products = this.order.products.filter(
          (item: any) => item.products._id !== _id
        );
      }
      swal('delete', 'You delete successfully !', 'success');
    });
    this.totalPrice = this.totalPrice = this.order?.products.reduce(
      (a: any, b: any) => a + b.orderPrice,
      0
    );
  }
}
