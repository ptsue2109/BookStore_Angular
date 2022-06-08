import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AuthService } from './../../../shared/sevices/auth.service';
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
    private messageService: MessageService
  ) {
    this.password = '';

    this.authForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', []),
      username: new FormControl('', []),
      phoneNumber: new FormControl('', []),
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
}
