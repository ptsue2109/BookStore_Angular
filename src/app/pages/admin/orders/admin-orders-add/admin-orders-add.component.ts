import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from 'src/app/shared/sevices/homeService.service';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-orders-add',
  templateUrl: './admin-orders-add.component.html',
  styleUrls: ['./admin-orders-add.component.scss'],
})
export class AdminOrdersAddComponent implements OnInit {
  homeData: any;
  cartValue: number = 0;
  orderPrice: number = 0;
  orderData: any;
  cartTotal: number = 0;
  userOrder: any;
  upload:any
  userForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+84-?)|0)?[0-9]{11}$'),
    ]),
    address: new FormControl('', [Validators.required]),
    note: new FormControl('', []),
  });
  constructor(
    private $title: Title,
    private $homeS: HomeService,
    private $lcService: LocalStorageService,
    private $toart: ToastrService,
    private $orderS: OrderService,
    private $routerS: Router
  ) {
    this.$title.setTitle('Order - Create new ');
  }

  ngOnInit(): void {
    this.$homeS.getAllData().subscribe((data) => {
      this.homeData = data;
    });
   this.uploadData()
  }
  addNewUser(event: any) {
    this.userOrder = event.target.value;
    console.log(' this.userOrder', this.userOrder);
    
  }
  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart(_id: string) {
    const carts = this.homeData.books.find((item: any) => item._id === _id);
    if (this.cartValue > carts?.stock) {
      this.$toart.warning(`quá số lượng, tối đa ${carts?.stock} sản phẩm`);
    } else {
      const addItem = {
        products: { ...carts },
        orderPrice: carts.cost * this.cartValue,
        orderQuantity: +this.cartValue,
      };
      this.cartValue = 0;
      this.$lcService.setItemAdmin(addItem);

      this.uploadData();
    }
  }

  uploadData() {
    this.upload = this.$lcService.getItemAdmin();
    console.log('upload',this.upload);
    
    this.cartTotal = this.upload.reduce(
      (a: any, b: any) => a + b.orderPrice,
      0
    );

    
  }
  thanhToan() {
    let upData: any = {
      userInfo: this.userOrder,
      products: this.upload,
      orderQuantity: this.upload?.length,
      totalPrice: this?.cartTotal,
      ...this.userForm.value
    };
    this.$orderS.createOrderByUser(upData).subscribe({
      next: (data) =>{
        this.$toart.success("Tạo đơn thành công");
        localStorage.removeItem('cartAdmin')
        setTimeout(() => {
          this.$routerS.navigate(['/admin/orders'])
        }, 2000);
      },
      error: ({error}) =>{
        this.$toart.success("Tạo đơn thất bại" + error)
      }
    })
  }
}
