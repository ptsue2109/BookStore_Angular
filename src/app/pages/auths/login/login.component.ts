import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthService } from './../../../shared/sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auths.components.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  authLoginForm: FormGroup;
  password: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private title: Title,
    private messageService: MessageService

  ) {
    this.password = '';

    this.authLoginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', []),
    });
   }

  ngOnInit(): void {
    this.title.setTitle('Login');
  }
  onSubmit() {
    console.log(this.authLoginForm.value);
    this.authService.authLogin(this.authLoginForm.value).subscribe({
      next: (data) => {
        const res = { data: data.user };
        if (res) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login success' })
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        }
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      },
      error: ({ error }) => {
        console.log(error);
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error}` })
        console.log(`${error}`);
      },
    });
  }
}