import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    loading = false
    error = ''

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private as: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.as.user) { 
            this.router.navigate([''])
        }
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        this.loading = true;
        if(this.as.login(this.loginForm.value.username, this.loginForm.value.password) !=null) {
          this.loading = false
          this.router.navigate([''])
        }
        // wrong user/pwd so show empty login form
        else {
          this.loading = false
          this.loginForm.controls['username'].setValue('')
          this.loginForm.controls['password'].setValue('')
          this.router.navigate(['login'])
        }
    }
}