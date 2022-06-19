import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from 'src/app/shared/sevices/homeService.service';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-orders-add',
  templateUrl: './admin-orders-add.component.html',
  styleUrls: ['./admin-orders-add.component.scss'],
})
export class AdminOrdersAddComponent implements OnInit {
  homeData: any;
  cartValue: number = 0
  orderPrice:number=0;
  orderData:any;
  cartTotal:number = 0;
  userOrder:any
  constructor(
    private $title: Title,
    private $homeS: HomeService,
    private $lcService:LocalStorageService,
    private $toart:ToastrService
  ) {
    this.$title.setTitle('Order - Create new ');
  }

  ngOnInit(): void {
    this.$homeS.getAllData().subscribe((data) => {
      this.homeData = data;
    });
    this.orderData = this.$lcService.getItemAdmin();
    console.log('this.orderData', this.orderData);
  }
  addNewUser(event: any) {
    this.userOrder = event.target.value;
  }
  onChangeCartValue(event: any){
    this.cartValue = event.target.value;
  }

  onAddToCart(_id: string) {
    const carts = this.homeData.books.find((item:any) => item._id === _id);
    if (this.cartValue > carts?.stock) {
      this.$toart.warning(`quá số lượng, tối đa ${carts?.stock} sản phẩm`)
    }
     else {
      const addItem = {
        products: { ...carts },
        orderPrice: carts.cost * this.cartValue,
        orderQuantity: +this.cartValue,
      };
      this.$lcService.setItemAdmin(addItem)
 
    }
  }
  thanhToan() {
    // let addToOrder: any = {
    //   userInfo: this.userOrder,
    //   products: this?.orderData,
    //   orderQuantity: this?.orderData?.length,
    //   orderPrice: this?.orderData.price,
    //   totalPrice: this?.cartTotal,
    // }
    // console.log('addToOrder',addToOrder);
    
  }
}
