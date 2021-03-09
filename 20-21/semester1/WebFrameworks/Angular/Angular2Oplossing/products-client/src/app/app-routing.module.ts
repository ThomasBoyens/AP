import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';

//define the routes
const appRoutes: Routes = [
    { path: '', component: ProductListComponent, canActivate: [AuthGuard] },
    { path: 'search', component: ProductSearchComponent, canActivate: [AuthGuard] },
    { path: 'add', component: ProductAddComponent, canActivate: [AuthGuard] },
    { path: 'edit/:name', component: ProductEditComponent, canActivate: [AuthGuard] },
    { path: 'delete', component: ProductDeleteComponent, canActivate: [AuthGuard] },
    { path: 'delete/:name', component: ProductDeleteComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
  ]

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes) ],
      exports: [RouterModule]
  })

  export class AppRoutingModule { }