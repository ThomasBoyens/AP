import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model/product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:3000/products';
   private contentHeaders: HttpHeaders;

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   }

   // Get all products
   getAllProducts(): Observable<Product[]> {
      let url = `${this.productsServiceURI}`

      return this.http.get<Product[]>(url);
   }

   // Insert a new product
   addProduct(product: Product): void {
      let url = `${this.productsServiceURI}/add`
      // !! subscribe is needed to execute POST
      this.http.post(url, product.getParams(),
                     { headers: this.contentHeaders })
                     .subscribe(data => {console.log(data )},
                                 error => { console.error(error) })
   }

   // Edit a product
   editProduct(product: Product): void {
      let url = `${this.productsServiceURI}/edit`
      // !! subscribe is needed to execute POST
      this.http.post(url, product.getParams(),
                     { headers: this.contentHeaders })
                     .subscribe(data => {console.log(data )},
                                 error => { console.error(error) })
   }

   // Search all products
   searchAllProducts(name: string): Observable<Product[]> {
      let url = `${this.productsServiceURI}/searchAll`;

      return this.http.post<Product[]>(url, `name=${name}`,
                    { headers: this.contentHeaders });
   }

    // Search One products
    searchOneProduct(name: string): Observable<Product[]> {
      let url = `${this.productsServiceURI}/searchOne`;

      return this.http.post<Product[]>(url, `name=${name}`,
                    { headers: this.contentHeaders });
   }

   // Delete a product
   deleteProduct(name: string): void {
      let url = `${this.productsServiceURI}/delete/${name}`
      // !! subscribe is needed to execute POST
      this.http.delete(url, 
                     { headers: this.contentHeaders })
                     .subscribe(data => {console.log(data )},
                                 error => { console.error(error) })
   }
}
