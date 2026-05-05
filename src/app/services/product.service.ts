import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private HttpClient: any) {}
  getAllproducts(): Observable<any> {
    return this.http.get('http://localhost:8083/products');
  }
  deleteProduct(product: any) {
    return this.http.delete('http://localhost:8083/products/' + product.id);
  }
}
