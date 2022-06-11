import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './../../../../shared/sevices/local-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userInfo: any;
  cartCount: any;
  cart:any
  constructor(private toastr: ToastrService, private router: Router,private lsService: LocalStorageService) {
  }
  ngOnInit(): void {
   this.cart =  this.lsService.getItem();
   this.cartCount = this.cart.length
  }
  logoutUser() {
    localStorage.removeItem('userInfo');
    this.toastr.success('Logout success');
    this.router.navigate(['/login']);
  }

}
