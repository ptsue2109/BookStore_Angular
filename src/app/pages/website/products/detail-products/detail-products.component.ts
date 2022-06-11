import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../shared/sevices/products.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LazyLoadEvent } from 'primeng/api';
import { OrderService } from 'src/app/shared/sevices/order.service';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
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
  orderCount:string = 'loading..'
  constructor(
    private ProductsService: ProductsService,
    private ActivatedRouter: ActivatedRoute,
    private title: Title,
    private lcService: LocalStorageService,
    private MessageService:MessageService,
    private OrderService: OrderService,
    private route:Router
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
      console.log(this.bookDetail);
      this.title.setTitle(this.namePro);
    });
  }
  loadCarsLazy(event: LazyLoadEvent) {}
  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
    console.log('cart-quantity', this.cartValue);
  }

  onAddToCart() {
    const { name, cost, _id, image } = this.bookDetail;
    const carts = { name, cost, _id, image };

    const addItem = {
      ...carts,
      userId: localStorage.getItem('userInfo'),
      price: cost * this.cartValue,
      quantity: +this.cartValue,
    };
    this.lcService.setItem(addItem);

       this.MessageService.add({
      severity: 'success',
      summary: 'Cart Item',
      detail: 'Add item in your cart',
    });
    this.cartValue = 1; 

  }
}
