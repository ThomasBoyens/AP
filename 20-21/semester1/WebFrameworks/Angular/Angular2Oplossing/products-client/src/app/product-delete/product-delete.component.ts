import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'product-delete',
  templateUrl: './product-delete.component.html'
})
export class ProductDeleteComponent {
  
  productName: string
  product = this.fb.group({
    name: ['', Validators.required],
  })

  constructor(private ps: ProductService,
              private fb: FormBuilder,
              private router: Router) {

      this.productName = router.url.split('/')[2]
      this.product.controls['name'].setValue(this.productName)            
   }

 onSubmit() {
   this.ps.deleteProduct(this.product.value.name)
   this.router.navigate(['']);
  }

}
