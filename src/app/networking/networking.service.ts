import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order, Product, User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  private baseUrl = 'http://localhost:8080';
  private usersEndpoint = '/users';
  private productsEndpoint = '/products';
  private ordersEndpoint = '/orders';
  private cartEndpoint = '/cart';
  private defaultOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}${this.usersEndpoint}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}${this.usersEndpoint}`, user, this.defaultOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.usersEndpoint}/${user.id}`, user, this.defaultOptions);
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.baseUrl}${this.usersEndpoint}/${id}`;

    return this.http.delete(url, this.defaultOptions);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}${this.productsEndpoint}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}${this.productsEndpoint}`, product, this.defaultOptions);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.productsEndpoint}/${product.id}`, product, this.defaultOptions);
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.baseUrl}${this.productsEndpoint}/${id}`;

    return this.http.delete(url, this.defaultOptions);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get(`${this.baseUrl}${this.ordersEndpoint}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post(`${this.baseUrl}${this.ordersEndpoint}`, order, this.defaultOptions);
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.ordersEndpoint}/${order.id}`, order, this.defaultOptions);
  }

  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.baseUrl}${this.ordersEndpoint}/${id}`;

    return this.http.delete(url, this.defaultOptions);
  }

}
