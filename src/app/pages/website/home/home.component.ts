import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../../shared/sevices/homeService.service';
import { CategoryService } from './../../../shared/sevices/category.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeData: any;
  categories: any;
  sliders: any;
  books:any;
  constructor(
    private HomeService: HomeService,
    private CategoryService: CategoryService,
    private title:Title
  ) {
    this.title.setTitle("Nhà xuất bản Kim Đồng")
  }

  ngOnInit(): void {
    this.HomeService.getAllData().subscribe((data) => {
      this.sliders = data.sliders;
      this.books = data.books
    });
    this.CategoryService.getAll().subscribe((data) => {
      this.categories = data.categories;
    });
  }
}
