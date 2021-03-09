import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../service/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent {

  product = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required]
  })

  constructor(private ps: ProductService,
              private fb: FormBuilder,
              private router: Router) {}

   onSubmit() {
       this.ps.addProduct(new Product(
                                        this.product.value.name,
                                        this.product.value.brand,
                                        this.product.value.description,
                                        this.product.value.price))
        this.router.navigate([''])
   }

}
