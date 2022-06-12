import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/shared/sevices/category.service';

@Component({
  selector: 'app-admin-cate-edit',
  templateUrl: './admin-cate-edit.component.html',
  styleUrls: ['./admin-cate-edit.component.scss']
})
export class AdminCateEditComponent implements OnInit {
  dataUser: any = [];
  id: string = '';
  file: any = [];
  selected: string = '';
  OldImage:any;
  newThumb : any;
  userForm: FormGroup;
  status: any[] = [
    { name: 'active', value: 'active' },
    { name: 'hidden', value: 'hidden' },
  ];
  constructor(
    private CategoryService: CategoryService,
    private messageService: MessageService,
    private route: Router,
     private ActivatedRouter: ActivatedRoute,
    private uploadFile: UploadService,
    private title: Title
  ) { 
    this.userForm = new FormGroup({
      cateName: new FormControl(),
      image: new FormControl(),
      status: new FormControl()
    });
    this.title.setTitle('Admin | Category - Edit');
  }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.CategoryService.getCateById(this.id).subscribe((dataUser) => {
      console.log('detail User',dataUser);
      
      this.dataUser = dataUser;
      this.selected=  dataUser.role
      this.OldImage = dataUser.image;
    });
  }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
    this.newThumb = localStorage.getItem('imgThum');
  }
  editUser() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Loading...'})
      let userData: any = {
        cateName: this.userForm.value.cateName,
        status: this.selected,
        image: this.newThumb ? this.newThumb : this.OldImage,
      };
      console.log(userData);
      
      setTimeout(() => {
         this.CategoryService.editCate(userData, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
          setTimeout(() => {
            this.route.navigate(['/admin/categories']);
            localStorage.removeItem('imgThum');
          },2000)
         
        },
        error: ({ error }) => {
          this.messageService.add({ severity: 'error', summary: 'Success', detail: `${error}`})
          localStorage.removeItem('imgThum');
        },
      });
      }, 5000);
     
  }

}
