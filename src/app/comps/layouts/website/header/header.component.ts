import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userInfo: any;
  cartCount: any;
  cart: any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private lsService: LocalStorageService,
    private MessageService: MessageService
  ) {}
  ngOnInit(): void {
    this.cart = this.lsService.getItem();
    this.cartCount = this.cart.length;
  }
  logoutUser() {
    localStorage.removeItem('userInfo');
    this.toastr.success('Logout success');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
  onSearch(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/search'], {
        queryParams: {
          q: form.value.keyword,
        },
      });
    } else {
      this.MessageService.add({
      severity: 'info',
      detail: 'Nhập từ khóa tìm kiếm',})
    }
  }
}
