import { Component, OnInit } from '@angular/core';
import {Product, ProductType} from '../models';
import {Location} from '@angular/common';
import {NetworkingService} from '../networking/networking.service';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  isEdit: boolean;
  product: Product;
  typesList: ProductType[];

  constructor(private location: Location, private networking: NetworkingService, private dataService: DataService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct();
    if (this.product == null) {
      this.product = new Product();
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }

    const component = this;
    this.networking.getTypes()
      .subscribe(function (types) {
        component.typesList = types;
        component.product.type = types[0];
      });
  }

  selectedType(typeId: string) {
    console.log(this.typesList[0].id)
    this.product.type = this.typesList.find(element => element.id === +typeId);
  }

  addProduct() {
    const component = this;
    this.networking.addProduct(this.product)
      .subscribe(function (product) {
        alert('Success');
        component.location.back();
      });
  }

  editProduct() {
    const component = this;
    this.networking.updateProduct(this.product)
      .subscribe(function (product) {
        alert('Success');
        component.location.back();
      });
  }
}
