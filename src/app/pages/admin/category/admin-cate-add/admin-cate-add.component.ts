import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CategoryService  } from '../../../../shared/sevices/category.service';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-cate-add',
  templateUrl: './admin-cate-add.component.html',
  styleUrls: ['./admin-cate-add.component.scss']
})
export class AdminCateAddComponent implements OnInit {
  AddForm: FormGroup;
  file: any = [];
  status: any[] = [
    { name: 'active', value: 'active' },
    { name: 'hidden', value: 'hidden' },
  ];
  selected: string = '';
  constructor(
    private CategoryService: CategoryService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title
  ) { 
    this.AddForm = new FormGroup({
      cateName: new FormControl(),
      image: new FormControl(),
      status: new FormControl()
    });
    this.title.setTitle('Admin | Category - Add');
  }

  ngOnInit(): void {
  }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      cateName: this.AddForm.value.cateName,
      image: localStorage.getItem('imgThum'),
      status: this.selected
    }
    setTimeout(() => {
      this.CategoryService.addCate(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/categories']);
            localStorage.removeItem('imgThum');
          }, 2000);
        },
        error: ({ error }) => {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: `${error}` })
          localStorage.removeItem('imgThum');
        },
      });
    }, 6000);
    


  }
}
