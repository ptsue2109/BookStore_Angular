import { FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/shared/sevices/products.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  keyword: string;
  books:any = [];
  constructor(private ProductsService: ProductsService, private activatedRoute$: ActivatedRoute,
    private title: Title,) {
      this.keyword = '';
  }

  ngOnInit(): void {
    this.keyword = this.activatedRoute$.snapshot.queryParams['q'];

    this.ProductsService.searchProduct(this.keyword).subscribe((response) => {
      console.log('data',response);
      
      this.books = response;
    });
    this.title.setTitle('Tìm kiếm: ' + this.keyword);
  }
}
