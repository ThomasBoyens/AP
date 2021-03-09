import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../service/model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie-add',
  templateUrl: './movie-add.component.html'
})
export class MovieAddComponent {

  movie = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    year: ['', Validators.required],
    rating: ['', Validators.required]
  })

  constructor(private ps: MovieService,
              private fb: FormBuilder,
              private router: Router) {}

   onSubmit() {
       this.ps.addMovie(new Movie(
                                        this.movie.value.name,
                                        this.movie.value.id,
                                        this.movie.value.year,
                                        this.movie.value.rating))
        this.router.navigate([''])
   }

}
