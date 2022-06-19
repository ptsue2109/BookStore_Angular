import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../shared/sevices/category.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private CategoryService: CategoryService,
    private title:Title,
    private router: Router,
    private ToastrService: ToastrService
  ) {
    this.title.setTitle("All collection")
  }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    if(this.userInfo === null || this.userInfo === undefined){
      this.ToastrService.error("Đăng nhập để tiếp tục");
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 3000);
    }

    this.CategoryService.getAllActive().subscribe((data) => {
      this.categories = data.categories;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });
  }
}
