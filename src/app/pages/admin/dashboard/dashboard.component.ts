import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../shared/sevices/homeService.service';
import { CategoryService } from 'src/app/shared/sevices/category.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  sliders: any;
  books: any;
  categories: any;
  brands: any;
  comments: any;
  orders: any;
  cardData: any = [];
  constructor(private home: HomeService, private cate: CategoryService) { }

  ngOnInit(): void {
    this.home.getAllData().subscribe(data => {
      this.books = data.books; this.cardData.push({ name: 'products', quantity: this.books.length, view: '/admin/products' });
      this.sliders = data.sliders; this.cardData.push({ name: 'sliders', quantity: this.sliders.length,view: '/admin/sliders'  });
    });
    this.cate.getAll().subscribe(data =>{
      console.log(data);
      
      this.categories = data.categories; this.cardData.push({ name: 'categories', quantity: this.categories.length,view: '/admin/categories'  });
    })
  }

}