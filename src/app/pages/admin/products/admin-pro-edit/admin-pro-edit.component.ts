import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../../shared/sevices/products.service';
import { HomeService } from './../../../../shared/sevices/homeService.service';
import { CategoryService } from './../../../../shared/sevices/category.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-pro-edit',
  templateUrl: './admin-pro-edit.component.html',
  styleUrls: ['./admin-pro-edit.component.scss']
})
export class AdminProEditComponent implements OnInit {
  id: string;
  file: any = [];
  files: any = [];
  bookSizes: any;
  bookTypes: any
  AddForm: FormGroup;
  categories: any;
  targets: any;
  dataPro: any = [];
  listImgDetail: any;
  OldImage:any;
  bookTypesSelected: string = '';
  cateSelected: string = '';
  targetSelected : string = '';
  bookSizeSelected : string = '';
  newThumb : any;
  newList:any;
  constructor(
    private productService: ProductsService,
    private homeService: HomeService,
    private router: Router,
    private title: Title,
    private uploadImg: UploadService,
    private CategoryService: CategoryService,
    private messageService: MessageService,
    private ActivatedRouter: ActivatedRoute,
  ) {
    this.id = '';
    this.AddForm = new FormGroup({
      image: new FormControl('', []),
      imageMutiple: new FormControl([]),
      name: new FormControl('', []),
      cost: new FormControl('', []),
      stock: new FormControl('', []),
      categoryId: new FormControl('', []),
      targetId: new FormControl('', []),
      desc: new FormControl('', []),
      authorName: new FormControl('', []),
      pageNumber: new FormControl('', []),
      bookWeight: new FormControl('', []),
      bookTypeId: new FormControl('', []),
      bookSizeId: new FormControl('', []),
    });

    this.title.setTitle('Products - EDIT ');
  }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.productService.getOneById(this.id).subscribe(data => {
      this.dataPro = data;
      this.listImgDetail = data.imageMutiple;
      this.cateSelected = data.categoryId._id;
      this.bookTypesSelected = data.bookTypeId._id;
      this.targetSelected = data.targetId._id;
      this.bookSizeSelected = data.bookSizeId._id
      this.OldImage = data.image;
      
    });

    this.homeService.getAllData().subscribe(homedata => {
      this.bookTypes = homedata.bookType;
      this.targets = homedata.target;
      this.bookSizes = homedata.bookSize;
    })
    this.CategoryService.getAll().subscribe(data => {
      this.categories = data.categories;
    })
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadImg.uploadImg(this.file);
    this.newThumb = localStorage.getItem('imgThum');
  }
  saveDetailImg(event: any) {
    this.files = event.target.files;
    this.uploadImg.uploadListImg(this.files);
    this.newList = JSON.parse(localStorage.getItem('imgList') || "{}");
  }
  
  changeTarget(event: any) {
    this.targetSelected = event.target.value
  }
  changeSize(event: any) {
    this.bookSizeSelected = event.target.value
  }
  changeType(event: any) {
    this.bookTypesSelected = event.target.value
  }
  onsubmit() {
    this.messageService.add({
      severity: 'info',
      summary: 'Loading',
      detail: 'Loading...',
    });
    let upload:any = {
      image: this.newThumb ? this.newThumb : this.OldImage,
      imageMutiple: this.newList ? this.newList : this.listImgDetail,
      name: this.AddForm.value.name,
      cost: this.AddForm.value.cost,
      stock: this.AddForm.value.stock,
      categoryId: this.AddForm.value.categoryId,
      targetId: this.targetSelected,
      desc: this.AddForm.value.desc,
      authorName: this.AddForm.value.authorName,
      pageNumber: this.AddForm.value.pageNumber,
      bookWeight: this.AddForm.value.bookWeight,
      bookTypeId: this.bookTypesSelected,
      bookSizeId: this.bookSizeSelected,
    }
    setTimeout(() => {
      this.productService.editProduct(upload, this.id).subscribe({
        next : (data) =>{
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'UPdate success' })
          setTimeout(() => {
            this.router.navigate(['/admin/products']);
            localStorage.removeItem('imgThum');
          }, 2000);
        },
        error:(error) =>{
          console.log(error);
          
          localStorage.removeItem('imgThum');
          localStorage.removeItem('imgList');
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: `${error}` })
        }
      })
    }, 4000);
  }
}
