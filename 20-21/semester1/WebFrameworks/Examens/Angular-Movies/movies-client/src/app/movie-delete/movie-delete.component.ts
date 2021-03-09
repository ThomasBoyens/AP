import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie-delete',
  templateUrl: './movie-delete.component.html'
})
export class MovieDeleteComponent {
  
  movieName: string
  movie = this.fb.group({
    name: ['', Validators.required],
  })

  constructor(private ps: MovieService,
              private fb: FormBuilder,
              private router: Router) {

      this.movieName = router.url.split('/')[2]
      this.movie.controls['name'].setValue(this.movieName)            
   }

 onSubmit() {
   this.ps.deleteMovie(this.movie.value.name)
   this.router.navigate(['']);
  }

}