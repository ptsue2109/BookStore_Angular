import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-product-by-cate',
  templateUrl: './product-by-cate.component.html',
  styleUrls: ['./product-by-cate.component.scss'],
})
export class ProductByCateComponent implements OnInit {
  products: any[] = [];
  categories: any;
  slug: string;
  cateName: string;
  items: MenuItem[] = [];
  constructor(
    private cateS: CategoryService,
    private ActivatedRouter: ActivatedRoute
  ) {
    this.slug = '';
    this.cateName = ''
  }

  ngOnInit(): void {
    this.slug = this.ActivatedRouter.snapshot.params['slug'];
    this.cateS.getCateBySlug(this.slug).subscribe((data) => {
      console.log('data',data);
      this.cateName = data.category.cateName
      
      this.products = data.books;
      console.log(' this.products', this.products);
      
    });

    this.cateS.getAll().subscribe((data) => {
      this.categories = data.categories;
      console.log('cate',this.categories);
      
    });
    
   
  }
}
