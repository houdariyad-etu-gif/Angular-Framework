import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Constructor uses lowercase 'http' to match method calls
  constructor(private http: HttpClient) {}

  getAllproducts(): Observable<any> {
    return this.http.get('http://localhost:8083/products');
  }

  deleteProduct(product: any): Observable<any> {
    return this.http.delete('http://localhost:8083/products/' + product.id);
  }
}
