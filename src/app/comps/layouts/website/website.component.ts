import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../../shared/sevices/homeService.service';
import { CategoryService } from './../../../shared/sevices/category.service';
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  userInfo:any;
  categories: any;
  constructor(private HomeService: HomeService,
    private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.userInfo =  JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(this.userInfo){
    };
    this.CategoryService.getAll().subscribe((data) => {
      this.categories = data.categories;
      console.log('cate',this.categories);
      
    });
  }

}
