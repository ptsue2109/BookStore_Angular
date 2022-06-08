import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../shared/sevices/products.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
})
export class DetailProductsComponent implements OnInit {
  slug: string;
  bookDetail: any;
  namePro:string;
  images: any[] = [];
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  constructor(
    private ProductsService: ProductsService,
    private ActivatedRouter: ActivatedRoute,
    private title: Title
  ) {
    this.slug = '';
    this.namePro = ''
  }

  ngOnInit(): void {
    this.slug = this.ActivatedRouter.snapshot.params['slug'];
    this.ProductsService.getOneBySlug(this.slug).subscribe((data) => {
      this.bookDetail = data;
      this.namePro = data.name;
      console.log(this.bookDetail);
       this.title.setTitle(this.namePro)
    });
   
  }
}
