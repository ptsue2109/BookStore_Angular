import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../shared/sevices/products.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrderService } from './../../../../shared/sevices/order.service';
@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
})
export class DetailProductsComponent implements OnInit {
  slug: string;
  bookDetail: any;
  namePro: string;
  imageThumb: any;
  imageMutiple: any;
  val2: number = 0;
  carts: any[] = [];
  cartValue: number;
  price: number;
  orderCount: string = 'loading..';
  currentUser: any;

  cart!: any;
  book!: any;
  constructor(
    private ProductsService: ProductsService,
    private ActivatedRouter: ActivatedRoute,
    private title: Title,
    private lcService: LocalStorageService,
    private MessageService: MessageService,
    private route: Router,
    private OrderService: OrderService
  ) {
    this.slug = '';
    this.namePro = '';
    this.cartValue = 1;
    this.price = 1;
  }

  ngOnInit(): void {
    this.slug = this.ActivatedRouter.snapshot.params['slug'];
    this.ProductsService.getOneBySlug(this.slug).subscribe((data) => {
      this.bookDetail = data;
      this.namePro = data.name;
      this.imageThumb = Array.of(data.image);
      this.imageMutiple = JSON.parse(JSON.stringify(data.imageMutiple));
      this.title.setTitle(this.namePro);
    });
    this.currentUser = JSON.parse(localStorage.getItem('userInfo')!);
    console.log('this.currentUser', this.currentUser);
  }
  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {
    const carts = this.bookDetail;

    const addItem = {
     
         ...carts ,
          price: carts.cost * this.cartValue,
          quantity: +this.cartValue,

    };

    console.log('carts Detal bôk', addItem);

    this.lcService.setItem(addItem);
    this.MessageService.add({
      severity: 'success',
      summary: 'Cart Item',
      detail: 'Add item in your cart',
    });
    this.cartValue = 1;
  }
}
