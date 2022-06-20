import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { swalMessage, swal } from 'src/app/shared/uiHelpers/swal/swal.module';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.scss'],
})
export class AdminOrdersListComponent implements OnInit {
  orders: any;
  orderStatus = [
    { name: 'Đang chuẩn bị', value: 'pending' },
    { name: 'Đã xác nhận', value: 'confirm' },
    { name: 'Đang vận chuyển', value: 'delivered' },
    { name: 'Hoàn thành', value: 'done' },
    { name: 'Hủy đơn', value: 'close' },
  
  ];
  constructor(private $ordeS: OrderService, private $mess: MessageService) {}
  ngOnInit(): void {
    this.$ordeS.getAll().subscribe((data) => {
      this.orders = data?.order;
    });
  }

  changeStatus(event: any, orderCode: string) {
    let upload = event.target.value;
    console.log('orderCode', orderCode);
    swalMessage('Bạn chắc chắn muốn cập nhật trạng thái cho đơn này?','OK','Cancel').then((result) =>{
      if(result.isConfirmed){
          this.$ordeS
            .updateOrder({ orderStatus: upload }, orderCode)
            .subscribe((data) => {
              this.$mess.add({
                severity: 'success',
                summary: 'success',
                detail: 'update status success',
              });
              this.ngOnInit();
            });
        }
     
    })
   
   
  }
}
