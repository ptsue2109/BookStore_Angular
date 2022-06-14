import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { AuthorService } from 'src/app/shared/sevices/author.service';
import { Router } from '@angular/router';

import { TargetsService } from 'src/app/shared/sevices/targets.service';
@Component({
  selector: 'app-aside-panel',
  templateUrl: './aside-panel.component.html',
  styleUrls: ['./aside-panel.component.scss'],
})
export class AsidePanelComponent implements OnInit {
  products: any;
  categories: any;
  authors: any;
  targets: any;
  constructor(
    private router: Router,
    private cateS: CategoryService,
    private TargetsService: TargetsService,
    private AuthorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.cateS.getAllActive().subscribe((data) => {
      this.categories = data.categories;
    });

    this.TargetsService.getAll().subscribe((data) => {
      this.targets = data.item;
      console.log(this.targets);
    });

    this.AuthorService.getAll().subscribe((data) => {
      this.authors = data.author;
    });
  }
}
