import { Injectable } from '@angular/core';
import {Product, User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private storage: any;

  public constructor() { }

  setUser(user: User) {
    this.storage = user;
  }

  getUser(): User {
    const user: User = this.storage;
    this.storage = null;
    return user;
  }

  setProduct(product: Product) {
    this.storage = product;
  }

  getProduct(): Product {
    const product = this.storage;
    this.storage = null;
    return product;
  }
}
