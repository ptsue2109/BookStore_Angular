import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
orders:any;
orderCode:any
  constructor(
  private OrderService:OrderService,
  private activeRoute: ActivatedRoute,
  private title: Title

  ) { }

  ngOnInit(): void {
    this.orderCode = this.activeRoute.snapshot.params['orderCode'];
    this.title.setTitle('Orders: ' +this.orderCode )
    this.OrderService.getOrderByOrderCode(this.orderCode).subscribe(data =>{
      this.orders = data;
    })
  }

}
