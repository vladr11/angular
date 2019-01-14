import {Component, OnInit} from '@angular/core';
import {CartItem, Product} from '../models';
import {Router} from '@angular/router';
import {NetworkingService} from '../networking/networking.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productsList: Product[] = [];
  productDetailInView: Product;
  cartList: CartItem[] = [];
  cartIsVisible: boolean = true;

  constructor(private router: Router, private networking: NetworkingService) {
    this.hideCart = this.hideCart.bind(this);
  }

  ngOnInit() {
    this.networking.getProducts()
      .subscribe(products => this.productsList = products);
  }

  productClicked(product) {
    this.productDetailInView = product;
  }

  exitDetailView() {
    this.productDetailInView = null;
  }

  showCart() {
    this.cartIsVisible = true;
    window.setTimeout(() => {
      window.addEventListener('click', this.hideCart);
    });
  }

  hideCart() {
    this.cartIsVisible = false;
    window.removeEventListener('click', this.hideCart);
  }

  stopThePropagation() {
    event.stopPropagation();
  }

  addItemToCart(item: Product) {
    const foundItem = this.cartList[_.indexOf(this.cartList, {id: item.id})];
    if (!foundItem) {
      console.log(new CartItem(item));
      this.cartList.push(new CartItem(item));
    }
    console.log(foundItem);
  }
  removeItemFromCart(itemId: number) {

  }
}
