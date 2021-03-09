import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './model/movie';

@Injectable()
export class MovieService {

  private moviesServiceURI: string = 'http://localhost:3000/movies';
  private contentHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  // GET all movies
  getAllMovies(): Observable<Movie[]> {
    let url = `${this.moviesServiceURI}`

    return this.http.get<Movie[]>(url);
  }

  // ADD a new Movie
  addMovie(Movie: Movie): void {
    let url = `${this.moviesServiceURI}/add`
    // !! subscribe is needed to execute POST
    this.http.post(url, Movie.getParams(),
      { headers: this.contentHeaders })
      .subscribe(data => { console.log(data) },
        error => { console.error(error) })
  }

  // EDIT a Movie
  editMovie(Movie: Movie): void {
    let url = `${this.moviesServiceURI}/edit`
    // !! subscribe is needed to execute POST
    this.http.post(url, Movie.getParams(),
      { headers: this.contentHeaders })
      .subscribe(data => { console.log(data) },
        error => { console.error(error) })
  }

  // SEARCH all movies
  searchAllMovies(name: string): Observable<Movie[]> {
    console.log("searchAllMovies");
    let url = `${this.moviesServiceURI}/searchAll`;

    return this.http.post<Movie[]>(url, `name=${name}`,
      { headers: this.contentHeaders });
  }

  // SEARCH One movies
  searchOneMovie(name: string): Observable<Movie[]> {
    let url = `${this.moviesServiceURI}/searchOne`;

    return this.http.post<Movie[]>(url, `name=${name}`,
      { headers: this.contentHeaders });
  }

  // DELETE a Movie
  deleteMovie(name: string): void {
    let url = `${this.moviesServiceURI}/delete/${name}`
    // !! subscribe is needed to execute POST
    this.http.delete(url,
      { headers: this.contentHeaders })
      .subscribe(data => { console.log(data) },
        error => { console.error(error) })
  }
}