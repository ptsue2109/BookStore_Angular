import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../../shared/sevices/homeService.service';
import { CategoryService } from './../../../shared/sevices/category.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TargetsService } from 'src/app/shared/sevices/targets.service';
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  userInfo: any;
  categories: any;
  targets:any
  constructor(
    private HomeService: HomeService,
    private CategoryService: CategoryService,
    private title:Title,
    private router: Router,
    private TargetsService:TargetsService
  ) {
    this.title.setTitle("All collection")
  }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    if (this.userInfo) {
    }
    this.CategoryService.getAllActive().subscribe((data) => {
      this.categories = data.categories;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });
  }
}
