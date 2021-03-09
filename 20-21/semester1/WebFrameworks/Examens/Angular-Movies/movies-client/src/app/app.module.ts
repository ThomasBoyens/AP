import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MovieListComponent }  from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieService } from './service/movie.service';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
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
                  MovieListComponent,
                  MovieAddComponent,
                  MovieSearchComponent,
                  MovieEditComponent,
                  MovieDeleteComponent,
                  LoginComponent],
  providers:    [ MovieService,
                  AuthenticationService],
                  //{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
                  //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true} ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
