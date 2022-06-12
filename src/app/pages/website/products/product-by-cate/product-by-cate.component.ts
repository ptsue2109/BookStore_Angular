import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ProductsService } from 'src/app/shared/sevices/products.service';
@Component({
  selector: 'app-product-by-cate',
  templateUrl: './product-by-cate.component.html',
  styleUrls: ['./product-by-cate.component.scss'],
})
export class ProductByCateComponent implements OnInit {
  products: any[] = [];
  allProducts: any[] = [];
  categoriesImg: any;
  slug: string;
  cateName: string;
  items: MenuItem[] = [];
  constructor(
    private cateS: CategoryService,
    private ActivatedRouter: ActivatedRoute,
    private title: Title,
    private ProductsService:ProductsService
  ) {
    this.slug = '';
    this.cateName = '';

  }

  ngOnInit(): void {
    this.slug = this.ActivatedRouter.snapshot.params['slug'];
    this.cateS.getCateBySlug(this.slug).subscribe((data) => {
  
      this.categoriesImg = data.category.image
      this.cateName = data.category.cateName;
      this.products = data.books;
      this.title.setTitle('Category: ' + this.cateName);
    });
    this.ProductsService.getAll().subscribe(data =>{
         this.allProducts = data.items;
         console.log('this.allProducts', this.allProducts);
         
    })



  }
}
