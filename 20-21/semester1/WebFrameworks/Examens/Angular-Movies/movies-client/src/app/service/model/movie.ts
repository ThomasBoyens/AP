import { HttpParams } from '@angular/common/http';

export class Movie {

   constructor (public name: string,
                public id: string, 
                public year: string, 
                public rating: string) {}

   getParams() : HttpParams {
      return new HttpParams()
         .set('name', this.name)
         .set('id', this.id)
         .set('year', this.year)
         .set('rating', this.rating);
   }
}