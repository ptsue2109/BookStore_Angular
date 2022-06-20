import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthService } from './../../../shared/sevices/auth.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auths.components.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  authLoginForm: FormGroup;
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

    this.authLoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
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
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login success',
          });
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        }
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      },
      error: ({ error }) => {
        console.log(error);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${error}`,
        });
        console.log(`${error}`);
      },
    });
  }
  showResponse(event: any) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
    if(event){
      this.googleLogin()
    }
}
  googleLogin() {
   
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(resp => {
         console.log('resp login',resp);
        
        this.authService.authLogin(resp).subscribe({
          next: (data) =>{
            localStorage.setItem('userInfo', JSON.stringify(data.user));
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Login success',
              });
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 3000);
            
          },
          error:({error}) =>{
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${error.message}`,
            });
            console.log(`${error.message}`);
          }

        })
      })
  }
}

