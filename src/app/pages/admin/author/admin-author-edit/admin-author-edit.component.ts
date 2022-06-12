import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthorService } from 'src/app/shared/sevices/author.service';
@Component({
  selector: 'app-admin-author-edit',
  templateUrl: './admin-author-edit.component.html',
  styleUrls: ['./admin-author-edit.component.scss']
})
export class AdminAuthorEditComponent implements OnInit {
  EditForm: FormGroup;
  id: string;
  authors: any = [];
  OldImage: any;
  newThumb: any;
  file: any = [];
  constructor(
    private AuthorService: AuthorService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private uploadFile: UploadService,
    private title: Title,
    private messageService: MessageService
  ) {
    this.EditForm = new FormGroup({
      authorName: new FormControl(),
      image: new FormControl(),
      desc: new FormControl()
    });
    this.title.setTitle('Admin | Authors - EDIT');
    this.id = ''
   }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    console.log(this.id);
    this.AuthorService.getOne(this.id).subscribe(data => {
      console.log(data);
      
      this.authors = data.author;
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
      authorName: this.EditForm.value.authorName,
      desc: this.EditForm.value.desc,
      image: this.newThumb ? this.newThumb : this.OldImage,
    };
    console.log(upload);

    setTimeout(() => {
      this.AuthorService.editProduct(upload, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
          setTimeout(() => {
            this.router.navigate(['/admin/authors']);
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
