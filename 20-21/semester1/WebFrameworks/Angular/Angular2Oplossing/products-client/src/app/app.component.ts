import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})

export class AppComponent  {

   constructor(private as: AuthenticationService, private router: Router) {}

   logout() {
      this.as.logout()
      this.router.navigate(['login'])
   }
}

   
