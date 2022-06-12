import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthorService } from 'src/app/shared/sevices/author.service';

@Component({
  selector: 'app-admin-author-add',
  templateUrl: './admin-author-add.component.html',
  styleUrls: ['./admin-author-add.component.scss']
})
export class AdminAuthorAddComponent implements OnInit {
  AddForm: FormGroup;
  file: any = [];
  constructor(
    private AuthorService: AuthorService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title
  ) { 
    this.AddForm = new FormGroup({
      authorName: new FormControl(),
      image: new FormControl(),
      desc: new FormControl()
    });
    this.title.setTitle('Admin | Auhors - Add');
  }

  ngOnInit(): void {
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      authorName: this.AddForm.value.authorName,
      image: localStorage.getItem('imgThum'),
      desc: this.AddForm.value.desc
    }
    setTimeout(() => {
      this.AuthorService.addNew(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/authors']);
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
