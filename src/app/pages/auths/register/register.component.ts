import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthService } from './../../../shared/sevices/auth.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auths.components.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  password: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private title: Title,
    private messageService: MessageService,
    private socialService: SocialAuthService,
    private toastr: ToastrService
  ) {
    this.password = '';

    this.authForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/),
      ]),
      password: new FormControl('', [
        // Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      username: new FormControl('', [
        // Validators.required,
        Validators.minLength(4),
      ]),
      phoneNumber: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Register');
  }
  onSubmit() {
    console.log('123');

    this.authService.authRegister(this.authForm.value).subscribe({
      next: (data) => {
        const res = { data: data.user };
        if (res) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Register success',
          });
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }
      },
      error: ({ error }) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${error.message}`,
        });
        console.log(`${error.message}`);
      },
    });
  }

  googleLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then((resp) => {
      console.log('resp res', resp);
      let { lastName, email, photoUrl, provider } = resp;
      let upload: any = {
        username: lastName,
        email: email,
        image: photoUrl,
        provider: provider,
      };
      console.log('upload',upload);
      
      this.authService.authRegister(upload).subscribe({
        next: (data) => {
          const res = { data: data.user };
          if (res) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Register success',
            });
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          }
        },
        error: ({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${error.message}`,
          });
          console.log(`${error.message}`);
        },
      });
    });
  }
}
