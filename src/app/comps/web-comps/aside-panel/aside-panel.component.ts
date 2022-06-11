import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aside-panel',
  templateUrl: './aside-panel.component.html',
  styleUrls: ['./aside-panel.component.scss']
})
export class AsidePanelComponent implements OnInit {
  products: any;
 @Input () categories: any;
  constructor(

    private cateS: CategoryService,
    private ActivatedRouter: ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    // this.cateS.getAll().subscribe((data) => {
    //   this.categories = data.categories;
    // });
      // this.slug = this.categories
      
      
  }

}
