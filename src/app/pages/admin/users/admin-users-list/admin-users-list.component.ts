import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/sevices/userService.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import {
  swal,
  swalMessage,
} from '../../../../shared/uiHelpers/swal/swal.module';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styles: [``],
  providers: [MessageService],
})
export class AdminUsersListComponent implements OnInit {
  users: any;
  constructor(private Title: Title, private UserService: UserService) {
    this.Title.setTitle('Users - List');
  }

  ngOnInit(): void {
    this.UserService.getAllUser().subscribe((data) => {
      console.log('userlist',data);
      this.users = data;
    });
  }
  deleteItem(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.UserService.removeUSer(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.users = this.users.filter((item: any) => item._id !== _id);
        });
      }
    });
  }
}
