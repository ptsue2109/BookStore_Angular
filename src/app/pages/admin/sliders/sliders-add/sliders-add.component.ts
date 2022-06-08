import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SlidersService } from '../../../../shared/sevices/slider.service';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sliders-add',
  templateUrl: './sliders-add.component.html',
  styleUrls: ['./sliders-add.component.scss']
})
export class SlidersAddComponent implements OnInit {
  AddForm: FormGroup;
  file: any = [];
  constructor(
    private SlidersService: SlidersService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title
  ) {
    this.AddForm = new FormGroup({
      slideName: new FormControl(),
      image: new FormControl(),
      URL: new FormControl()
    });
    this.title.setTitle('Admin | Sliders - Add');
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
      slideName: this.AddForm.value.slideName,
      image: localStorage.getItem('imgThum'),
      URL: this.AddForm.value.URL
    }
    setTimeout(() => {
      this.SlidersService.addNew(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/sliders']);
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
