import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { ActivatedRoute } from '@angular/router';
import { TargetsService } from 'src/app/shared/sevices/targets.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside-panel',
  templateUrl: './aside-panel.component.html',
  styleUrls: ['./aside-panel.component.scss'],

})
export class AsidePanelComponent implements OnInit {
  products: any;
  categories: any;
  authors: any;
  targets: any
  constructor(

    private cateS: CategoryService,
    private ActivatedRouter: ActivatedRoute,
    private TargetsService: TargetsService
  ) {

  }

  ngOnInit(): void {
    this.cateS.getAllActive().subscribe((data) => {
      this.categories = data.categories;
    });

    this.TargetsService.getAll().subscribe((data) => {
      this.targets = data.item;
    })


  }

}
