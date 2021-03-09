import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../service/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {

  productName: string
  product = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required]
  })

  constructor(private ps: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private activeroute: ActivatedRoute) {

      // simple splitting of url parts
      this.productName = router.url.split('/')[2]
      // preferred way of handling active route
      this.activeroute.params
        .subscribe(params => { this.productName = params['name'];
                               this.ps.searchOneProduct(this.productName)
                                  .subscribe(data => { this.product.controls['name'].setValue(data[0].name)
                                                       this.product.controls['brand'].setValue(data[0].brand)
                                                       this.product.controls['description'].setValue(data[0].description)
                                                       this.product.controls['price'].setValue(data[0].price)
                                                      },
                                            error => { console.log(error) })
                              }
                  )
    }

    onSubmit() {
      this.ps.editProduct(new Product(this.product.value.name,
                                      this.product.value.brand,
                                      this.product.value.description,
                                      this.product.value.price))
      this.router.navigate([''])
   }
}
