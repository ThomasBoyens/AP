import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './login/login.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

//define the routes
const appRoutes: Routes = [
    { path: '', component: MovieListComponent, canActivate: [AuthGuard] },
    { path: 'search', component: MovieSearchComponent, canActivate: [AuthGuard] },
    { path: 'add', component: MovieAddComponent, canActivate: [AuthGuard] },
    { path: 'edit/:name', component: MovieEditComponent, canActivate: [AuthGuard] },
    { path: 'delete', component: MovieDeleteComponent, canActivate: [AuthGuard] },
    { path: 'delete/:name', component: MovieDeleteComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
  ]

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes) ],
      exports: [RouterModule]
  })

  export class AppRoutingModule { }