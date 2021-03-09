import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Movie } from '../service/model/movie';
import { MovieService } from '../service/movie.service';

@Component ({
   selector: 'movie-search',
   templateUrl: './movie-search.component.html'
})

export class MovieSearchComponent {
   
   movies : Movie[];
   movie = this.fb.group({
      name: ['', Validators.required]
   });

   constructor(private ms: MovieService, 
               private fb: FormBuilder) {}

   onSubmit() {
     console.log(this.movie.value.name);
       this.ms.searchAllMovies(this.movie.value.name)
                   .subscribe(data => { this.movies = data }, 
                              error => { console.error(error) });
   }
}
