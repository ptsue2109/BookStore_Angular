import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/sevices/local-storage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any;
  cartItemValues: number = 0;
  carts:any
  constructor(private lsService: LocalStorageService) {}

  ngOnInit(): void {
    this.carts = this.lsService.getItem();
    console.log(this.carts);
    
    this.onSetCart();
    this.lsService.watchStorage().subscribe((data) => {
      this.onSetCart();
    });
  }

  onSetCart() {
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = this.cartItems.reduce(
      (a: any, b: any) => a + b.price,
      0
    );
  }
}
