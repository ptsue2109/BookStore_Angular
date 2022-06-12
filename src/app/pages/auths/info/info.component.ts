import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/sevices/userService.service';
import { UploadService } from '../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  dataUser: any = [];
  id: string = '';
  file: any = [];
  newThumb: any;
  OldImage: any;
  userForm: FormGroup;
  constructor(
    private UserService: UserService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private uploadFile: UploadService,
    private title: Title,
    private messageService: MessageService
  ) {
    this.title.setTitle('Infomation');
    this.userForm = new FormGroup({
      email: new FormControl(),
      desc: new FormControl(),
      username: new FormControl(),
      phoneNumber: new FormControl(),
      address: new FormControl(),
      image: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('userInfo')!);
    this.id = this.dataUser._id;
    this.OldImage = this.dataUser.image
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
    this.newThumb = localStorage.getItem('imgThum');
  }
  editUser() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Loading...' })
    let userData: any = {
      email: this.userForm.value.email,
      username: this.userForm.value.username,
      phoneNumber: this.userForm.value.phoneNumber,
      address: this.userForm.value.address,
      desc: this.userForm.value.desc,
      image: this.newThumb ? this.newThumb : this.OldImage,
    };
    console.log('userData', userData);
    setTimeout(() => {
      this.UserService.editUser(userData, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' });
          setTimeout(() => {
            localStorage.setItem('userInfo',JSON.stringify(data));
            this.router.navigate(['/']);
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
