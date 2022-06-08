import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/sevices/userService.service';
import { UploadService } from '../../../../shared/sevices/upload.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-users-add',
  templateUrl: './admin-users-add.component.html',
  styleUrls: ['./admin-users-add.component.scss']
})
export class AdminUsersAddComponent implements OnInit {
  roles: any[] = [
    { name: 'USER', value: 'user' },
    { name: 'ADMIN', value: 'admin' },
  ];
  file: any = [];
  selected: string = '';
  userForm: FormGroup
  constructor(
    private UserService: UserService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title
  ) {
    this.title.setTitle('Admin | Users - Add');
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
  }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };

  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  addUser() {
    let img = localStorage.getItem('imgThum');
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });

    let userData: any = {
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      username: this.userForm.value.username,
      phoneNumber: this.userForm.value.phoneNumber,
      address: this.userForm.value.address,
      desc: this.userForm.value.desc,
      image: img,
      role: this.selected,
    };
    setTimeout(() => {
      this.UserService.addUsers(userData).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/admin/users']);
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
