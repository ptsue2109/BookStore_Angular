import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/sevices/userService.service';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-users-edit',
  templateUrl: './admin-users-edit.component.html',
  styleUrls: ['./admin-users-edit.component.scss'],
})
export class AdminUsersEditComponent implements OnInit {
  dataUser: any = [];
  id: string;
  file: any = [];
  selected: string = '';
  OldImage:any;
  newThumb : any;
  userForm: FormGroup;
  roles: any[] = [
    { name: 'USER', value: 'user' },
    { name: 'ADMIN', value: 'admin' },
  ];
  constructor(
    private UserService: UserService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private uploadFile: UploadService,
    private title: Title,
    private messageService: MessageService
  ) {
    this.id = '';
    this.title.setTitle('Admin | Users - Edit'); 
    this.userForm = new FormGroup({
    email: new FormControl(),
    desc: new FormControl(),
    password: new FormControl(),
    username: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    role: new FormControl(),
    image: new FormControl(),
  });
  }

  ngOnInit(): void {
    this.id = this.ActivatedRouter.snapshot.params['id'];
    this.UserService.getOneUser(this.id).subscribe((dataUser) => {
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
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        username: this.userForm.value.username,
        phoneNumber: this.userForm.value.phoneNumber,
        address: this.userForm.value.address,
        desc: this.userForm.value.desc,
        image: this.newThumb ? this.newThumb : this.OldImage,
        role: this.selected,
      };
      console.log(userData);
      
      setTimeout(() => {
         this.UserService.editUser(userData, this.id).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
          setTimeout(() => {
            this.router.navigate(['/admin/users']);
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
