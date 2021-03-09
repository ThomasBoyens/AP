import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService } from './service/product.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './service/authentication.service';
/*import { BasicAuthInterceptor } from './auth/basic-auth.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';*/

@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  ReactiveFormsModule, 
                  AppRoutingModule],
  declarations: [ AppComponent, 
                  ProductListComponent,
                  ProductAddComponent,
                  ProductSearchComponent,
                  ProductEditComponent,
                  ProductDeleteComponent,
                  LoginComponent],
  providers:    [ ProductService,
                  AuthenticationService],
                  //{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
                  //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true} ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
