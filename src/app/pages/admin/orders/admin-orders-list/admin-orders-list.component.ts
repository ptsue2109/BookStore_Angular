import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/sevices/order.service';
@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.scss']
})
export class AdminOrdersListComponent implements OnInit {
  orders:any;
  products:any
  constructor(
    private ordeS:OrderService
  ) { }
  ngOnInit(): void {
    this.ordeS.getAll().subscribe(data =>{
      console.log('data',data);
        this.orders = data;
        console.log();
        
        this.products = data.products;
        console.log( this.products);
        
    })
  }

}
