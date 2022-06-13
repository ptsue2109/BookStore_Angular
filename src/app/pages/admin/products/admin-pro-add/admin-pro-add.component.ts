import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../../shared/sevices/products.service';
import { HomeService } from './../../../../shared/sevices/homeService.service';
import { CategoryService } from './../../../../shared/sevices/category.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-admin-pro-add',
  templateUrl: './admin-pro-add.component.html',
  styleUrls: ['./admin-pro-add.component.scss'],
})
export class AdminProAddComponent implements OnInit {
  AddForm: FormGroup;
  categories: any;
  targets: any;
  bookSizes: any;
  bookTypes: any;
  file: any = [];
  files: any = [];
  authors:any = [];
  constructor(
    private productService: ProductsService,
    private homeService: HomeService,
    private router: Router,
    private title: Title,
    private uploadImg: UploadService,
    private CategoryService: CategoryService,
    private messageService: MessageService
  ) {
    this.AddForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      imageMutiple: new FormControl([]),
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      cost: new FormControl('', [Validators.required,Validators.min(1)]),
      stock: new FormControl('', [Validators.required,Validators.min(1)]),
      categoryId: new FormControl('', [Validators.required]),
      targetId: new FormControl('', [Validators.required]),
      desc: new FormControl('', []),
      authorId: new FormControl('', [Validators.required]),
      pageNumber: new FormControl('', [Validators.required]),
      bookWeight: new FormControl('', [Validators.required]),
      bookTypeId: new FormControl('', [Validators.required]),
      bookSizeId: new FormControl('', [Validators.required]),
    });

    this.title.setTitle('Products - Add ');
  }

  ngOnInit(): void {
    this.homeService.getAllData().subscribe((data) => {
      this.targets = data.target;
      this.bookSizes = data.bookSize;
      this.bookTypes = data.bookType;
      this.authors = data.author
    });
    this.CategoryService.getAllActive().subscribe((data) => {
      this.categories = data.categories;
    });
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadImg.uploadImg(this.file);
  }

  saveDetailImg(event: any) {
    this.files = event.target.files;
    this.uploadImg.uploadListImg(this.files);
  }
  addNew() {
    let urlDetail = JSON.parse(localStorage.getItem('imgList') || '{}');
    let url = localStorage.getItem('imgThum');

    this.messageService.add({
      severity: 'info',
      summary: 'Loading',
      detail: 'Loading...',
    });
    let upload: any = {
      image: url,
      imageMutiple: urlDetail,
      name: this.AddForm.value.name,
      cost: this.AddForm.value.cost,
      stock: this.AddForm.value.stock,
      categoryId: this.AddForm.value.categoryId,
      targetId: this.AddForm.value.targetId,
      desc: this.AddForm.value.desc,
      authorId: this.AddForm.value.authorId,
      pageNumber: this.AddForm.value.pageNumber,
      bookWeight: this.AddForm.value.bookWeight,
      bookTypeId: this.AddForm.value.bookTypeId,
      bookSizeId: this.AddForm.value.bookSizeId,
    };
    setTimeout(() => {
      this.productService.addNew(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Add success',
          });
          setTimeout(() => {
            this.router.navigate(['/admin/products']);
            localStorage.removeItem('imgThum');
            localStorage.removeItem('imgList');
          }, 2000);
        },
        error: ({ error }) => {
          localStorage.removeItem('imgThum');
          localStorage.removeItem('imgList');
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: `${error}`,
          });
        },
      });
    }, 5000);
  }
}
