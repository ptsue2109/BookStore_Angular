import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userInfo: any;
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}
  logoutUser() {
   
  }
}
