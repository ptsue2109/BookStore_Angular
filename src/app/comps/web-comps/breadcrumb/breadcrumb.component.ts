import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[] = [];

  home!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Computer'},
      
  ];

  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
