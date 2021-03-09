import { Component } from '@angular/core';
import { Movie } from '../service/model/movie';
import { MovieService } from '../service/movie.service';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html'
})

export class MovieListComponent  {
   
   movies: Movie[];

   constructor(private ms: MovieService) {}

   ngOnInit(): void {
       this.ms.getAllMovies()
                  .subscribe(data => { this.movies = data }, 
                             error => { console.error(error) });
   }
}
