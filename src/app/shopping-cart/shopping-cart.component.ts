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
  cartIsVisible: boolean;

  constructor(private router: Router, private networking: NetworkingService) {
    this.hideCart = this.hideCart.bind(this);
  }

  ngOnInit() {
    this.networking.getProducts()
      .subscribe(products => this.productsList = products);
  }

  openProductDetails(productId: number) {
    this.productDetailInView = this.productsList[_.findIndex(this.productsList, {id: productId})];
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
    window.setTimeout(() => {
      window.removeEventListener('click', this.hideCart);
    });
  }

  stopThePropagation() {
    event.stopPropagation();
  }

  addItemToCart(item: Product | CartItem) {
    this.exitDetailView();
    const foundItem = this.cartList[_.findIndex(this.cartList, {id: item.id})];
    if (!foundItem) {
      this.cartList.push(new CartItem(item));
    }
    else {
      foundItem.amount++;
    }

    this.saveToLocalStorage();
  }

  removeItemFromCart(item: Product | CartItem) {
    const foundItem = this.cartList[_.findIndex(this.cartList, {id: item.id})];
    if (foundItem.amount > 1) {
      foundItem.amount--;
    }
    else {
      this.cartList.splice(_.findIndex(this.cartList, {id: item.id}), 1);
    }
    this.saveToLocalStorage();
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      totalPrice += this.cartList[i].amount * this.cartList[i].price;
    }
    return totalPrice;
  }

  private saveToLocalStorage() {
    console.log(this.cartList);
  }

  placeOrder() {
    const cartForServer = [];
    for (let i = 0; i < this.cartList.length; i++) {
      cartForServer.push({
        id: this.cartList[i].id,
        quantity: this.cartList[i].amount
      })
    }

    this.networking.addOrder(cartForServer).subscribe(() => {
      console.log('It is work')
    }, () => {
      console.log('It no work')
    });
  }
}
