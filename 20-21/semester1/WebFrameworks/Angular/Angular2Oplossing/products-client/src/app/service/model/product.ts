import { HttpParams } from '@angular/common/http';

export class Product {

   constructor (public name: string,
                public brand: string, 
                public description: string, 
                public price: string) {}

   getParams() : HttpParams {
      return new HttpParams()
         .set('name', this.name)
         .set('description', this.description)
         .set('brand', this.brand)
         .set('price', this.price);
   }
}
