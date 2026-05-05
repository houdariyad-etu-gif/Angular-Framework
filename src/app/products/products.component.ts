import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products! : Array<any>;
  //injection des dependances
  constructor( private productService : ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllproducts().subscribe({
      next : resp  => {
        this.products = resp;
      },
      error : err => {
        console.log(err);
      }
    });
  }
  handleDelete(product: any) {
    let v = confirm('etes vous sure de vouloir supprimer?');
    if (v == true) {
      this.productService.deleteProduct(product).subscribe({
        next: (value) => {
          this.getAllProducts();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
