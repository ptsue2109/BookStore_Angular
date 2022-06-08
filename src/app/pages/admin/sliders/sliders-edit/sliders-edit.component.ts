import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SlidersService } from '../../../../shared/sevices/slider.service';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sliders-edit',
  templateUrl: './sliders-edit.component.html',
  styleUrls: ['./sliders-edit.component.scss']
})
export class SlidersEditComponent implements OnInit {
  EditForm: FormGroup;
  id: string;
  sliders: any = [];
  OldImage: any;
  newThumb: any;
  file: any = [];

  constructor(
    private SlidersService: SlidersService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private uploadFile: UploadService,
    private title: Title,
    private messageService: MessageService
  ) {
    this.EditForm = new FormGroup({
      slideName: new FormControl(),
      image: new FormControl(),
      URL: new FormControl()
    });
    this.title.setTitle('Admin | Sliders - EDIT');
    this.id = ''
  }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.SlidersService.getOne(this.id).subscribe(data => {
      console.log(data);
      
      this.sliders = data;
      this.OldImage = data.image
    })
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
    this.newThumb = localStorage.getItem('imgThum');
  }
  onEdit() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Loading...' })
    let upload: any = {
      slideName: this.EditForm.value.slideName,
      URL: this.EditForm.value.URL,
      image: this.newThumb ? this.newThumb : this.OldImage,
    };
    console.log(upload);

    setTimeout(() => {
      this.SlidersService.editProduct(upload, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
          setTimeout(() => {
            this.router.navigate(['/admin/sliders']);
            localStorage.removeItem('imgThum');
          }, 2000)
        },
        error: ({ error }) => {
          this.messageService.add({ severity: 'error', summary: 'Success', detail: `${error}` })
          localStorage.removeItem('imgThum');
        },
      });
    }, 5000);

  }

}
