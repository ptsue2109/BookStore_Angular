import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductsService } from 'src/app/shared/sevices/products.service';
import { TargetsService } from 'src/app/shared/sevices/targets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-by-cate',
  templateUrl: './product-by-cate.component.html',
  styleUrls: ['./product-by-cate.component.scss'],
})
export class ProductByCateComponent implements OnInit {
  productsByCate: any[] = [];
  allProducts: any[] = [];
  categoriesImg: any;
  cateSlug: string;
  cateName: string;
  authorBook: any;

  constructor(
    private cateS: CategoryService,
    private ActivatedRouter: ActivatedRoute,
    private TargetsService: TargetsService,
    private ProductsService: ProductsService,
    private title: Title,
    private router:Router
  ) {
    this.cateSlug = '';
    this.cateName = '';
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getProductByCate();
  }

  getAllProduct() {
    this.ProductsService.getAll().subscribe((data) => {
      this.allProducts = data.items;
      this.cateName = 'All Products';
    });
  }

  getProductByCate() {
    this.cateSlug = this.ActivatedRouter.snapshot.params['slug'];
    this.cateS.getCateBySlug(this.cateSlug).subscribe((data) => {
      this.categoriesImg = data.category.image;
      this.cateName = data.category!.cateName;
      this.productsByCate = data.books;
      this.title.setTitle('Category: ' + this.cateName);
    });
  }
}
