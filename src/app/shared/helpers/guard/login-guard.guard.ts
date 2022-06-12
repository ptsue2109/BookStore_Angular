import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUsers = JSON.parse(localStorage.getItem('userInfo') || '{}');
      if (loggedInUsers.email == undefined || loggedInUsers.email == '') {
          this.toastr.error('Đăng nhập để tiếp tục');
          this.router.navigate(['/login']);
          return false;
      }
    return true;
  }
  
}
