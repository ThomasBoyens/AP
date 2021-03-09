import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Product } from '../service/model/product';
import { ProductService } from '../service/product.service';

@Component ({
   selector: 'product-search',
   templateUrl: './product-search.component.html'
})

export class ProductSearchComponent {
   
   products : Product[];
   product = this.fb.group({
      name: ['', Validators.required]
   });

   constructor(private ps: ProductService, 
               private fb: FormBuilder) {}

   onSubmit() {
       this.ps.searchAllProducts(this.product.value.name)
                   .subscribe(data => { this.products = data }, 
                              error => { console.error(error) });
   }
}
