import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products! : Array<any>;

  constructor() {}

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Computer', price: 2300, selected: true },
      { id: 2, name: 'Printer', price: 1200, selected: false },
      { id: 3, name: 'Smart Phone', price: 1100, selected: true },
    ]
  }

  protected handleDelete(product: any) {
    this.products = this.products.filter((p:any)=>p.id != product.id)
  }
}
