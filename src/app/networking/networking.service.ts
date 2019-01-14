import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order, Product, ProductType, User} from '../models';
import {catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  private baseUrl = 'http://380ec660.ngrok.io';
  private usersEndpoint = '/users';
  private productsEndpoint = '/products';
  private typesEndpoint = '/types';
  private ordersEndpoint = '/orders';
  private cartEndpoint = '/cart';
  private loginEndpoint = '/login';
  private defaultOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private sessionId: string;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}${this.usersEndpoint}`)
      .pipe(map(data => data['users']));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}${this.usersEndpoint}`, user, this.defaultOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(`${this.baseUrl}${this.usersEndpoint}/${user.id}`, user, this.defaultOptions);
  }

  deleteUser(user: User | number): Observable<any> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.baseUrl}${this.usersEndpoint}/${id}`;

    return this.http.delete<User>(url, this.defaultOptions)
      .pipe(map(_ => user));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${this.productsEndpoint}`)
      .pipe(map(data => data['products']));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}${this.productsEndpoint}`, product, this.defaultOptions);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(`${this.baseUrl}${this.productsEndpoint}/${product.id}`, product, this.defaultOptions);
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.baseUrl}${this.productsEndpoint}/${id}`;

    return this.http.delete<Product>(url, this.defaultOptions);
  }

  getTypes(): Observable<ProductType[]> {
    const url = `${this.baseUrl}${this.typesEndpoint}`;

    return this.http.get(url, this.defaultOptions)
      .pipe(map(data => data['types']));
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}${this.ordersEndpoint}`)
      .pipe(map(data => data['orders']));
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}${this.ordersEndpoint}`, order, this.defaultOptions);
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put<Order>(`${this.baseUrl}${this.ordersEndpoint}/${order.id}`, order, this.defaultOptions);
  }

  deleteOrder(order: Order | number): Observable<Order> {
    const id = typeof order === 'number' ? order : order.id;
    const url = `${this.baseUrl}${this.ordersEndpoint}/${id}`;

    return this.http.delete<Order>(url, this.defaultOptions);
  }

  login(username: String, password: String): Observable<any> {
    const url = `${this.baseUrl}${this.loginEndpoint}`;
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };

    const service = this;

    const options = {
      headers: headers,
      observe: 'response',
      responseType: 'text',
    };

    return this.http.post(
      url,
      `username=${username}&password=${password}`,
      //options
    )
      .pipe(
        map(response => response),// {
        //   const cookieHeader = response.headers.get('Set-Cookie');
        //   const sessionId = cookieHeader.split('=')[1];
        //   service.sessionId = sessionId;
        //   console.log(`${sessionId}`);
        //   console.log(`${response}`);
        //   return of({'role': 'dummy'});
        // }),
        // catchError(err => console.log(`${err}`))
        // map(data => data.role)
      );
  }

}
