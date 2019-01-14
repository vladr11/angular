import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {Router} from '@angular/router';
import {NetworkingService} from '../networking/networking.service';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  tableColumns = Object.keys(new Product());

  constructor(private router: Router, private networking: NetworkingService, private dataService: DataService) { }

  ngOnInit() {
    this.tableColumns.push('Edit');
    this.tableColumns.push('Delete');
    this.networking.getProducts()
      .subscribe(products => this.productsList = products);
  }

  add() {
    this.router.navigate(['/product-edit']);
  }

  edit(product: Product) {
    this.dataService.setProduct(product);
    this.router.navigate(['/product-edit']);
  }

  delete(product: Product) {
    this.networking.deleteProduct(product)
      .subscribe(deletedProduct => this.productsList = this.productsList.filter(element => element.id !== deletedProduct.id));
  }

}
