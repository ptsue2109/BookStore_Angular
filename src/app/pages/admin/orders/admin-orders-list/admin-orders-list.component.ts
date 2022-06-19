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
    { name: 'pending', value: 'pending' },
    { name: 'delivered', value: 'delivered' },
    { name: 'done', value: 'done' },
    { name: 'close', value: 'close' },
    { name: 'confirm', value: 'confirm' },
  ];
  constructor(private $ordeS: OrderService, private $mess: MessageService) {}
  ngOnInit(): void {
    this.$ordeS.getAll().subscribe((data) => {
      this.orders = data?.order;
      console.log('orderList', this?.orders);
    });
  }
  deleteItem(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.$ordeS.deleteOrder(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.orders = this.orders.filter((item: any) => item._id !== _id);
        });
      }
    });
  }
  changeStatus(event: any, orderCode: string) {
    let upload = event.target.value;
    console.log('orderCode', orderCode);

    const cf = window.confirm('you sure');
    if (cf) {
      console.log(upload, orderCode);
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
  }
}
