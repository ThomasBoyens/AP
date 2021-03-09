import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../service/model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent {

  movieName: string
  movie = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    year: ['', Validators.required],
    rating: ['', Validators.required]
  })

  constructor(private ms: MovieService,
    private fb: FormBuilder,
    private router: Router,
    private activeroute: ActivatedRoute) {

      // simple splitting of url parts
      this.movieName = router.url.split('/')[2]
      // preferred way of handling active route
      this.activeroute.params
        .subscribe(params => { this.movieName = params['name'];
                               this.ms.searchOneMovie(this.movieName)
                                  .subscribe(data => { this.movie.controls['name'].setValue(data[0].name)
                                                       this.movie.controls['id'].setValue(data[0].id)
                                                       this.movie.controls['year'].setValue(data[0].year)
                                                       this.movie.controls['price'].setValue(data[0].rating)
                                                      },
                                            error => { console.log(error) })
                              }
                  )
    }

    onSubmit() {
      this.ms.editMovie(new Movie(this.movie.value.name,
                                      this.movie.value.id,
                                      this.movie.value.year,
                                      this.movie.value.rating))
      this.router.navigate([''])
   }
}
