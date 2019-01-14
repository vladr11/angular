import { Component, OnInit } from '@angular/core';
import {Product} from '../models';
import {Router} from '@angular/router';
import {NetworkingService} from '../networking/networking.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productsList: Product[];

  constructor(private router: Router, private networking: NetworkingService, private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.networking.getProducts()
      .subscribe(products => this.productsList = products);
  }

  getImage(product: Product) {
    return this.sanitization.bypassSecurityTrustStyle(`url(${product.image})`);
  }

}
