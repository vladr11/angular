/**
 * Created on 03/1/19.
 */
export class User {
  id: string;
  fullname: string;
  username: string;
  email: string;
  address: string;
  role: string;
  password: string;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.fullname = newObj && newObj.fullname ? newObj.fullname : null;
    this.username = newObj && newObj.username ? newObj.username : null;
    this.email = newObj && newObj.email ? newObj.email : null;
    this.address = newObj && newObj.address ? newObj.address : null;
    this.role = newObj && newObj.role ? newObj.role : null;
  }
}

export class ProductType {
  id: string;
  type: string;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.type = newObj && newObj.type ? newObj.type : null;
  }

  public toString(): string {
    return this.type;
  }
}

export class Product {
  id: string;
  name: string;
  description: string;
  company: string;
  type: ProductType;
  quantity: number | string;
  price: number | string;
  image: string;
  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.name = newObj && newObj.name ? newObj.name : null;
    this.description = newObj && newObj.description ? newObj.description : null;
    this.company = newObj && newObj.company ? newObj.company : null;
    this.type = newObj && newObj.type ? new ProductType(newObj.type) : new ProductType();
    this.quantity = newObj && newObj.quantity ? newObj.quantity : null;
    this.price = newObj && newObj.price ? newObj.price : null;
    this.image = newObj && newObj.image ? newObj.image : null;
  }
}

export class Order {
  id: string;
  user: string;
  date: string;
  total: string;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.user = newObj && newObj.user ? newObj.user : null;
    this.date = newObj && newObj.date ? newObj.date : null;
    this.total = newObj && newObj.total ? newObj.total : null;
  }
}

export class OrderItem {
  id?: string;
  product: Product;
  quantity: number;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.product = newObj && newObj.product ? new Product(newObj.product) : new Product();
    this.quantity = newObj && newObj.quantity ? newObj.quantity : null;
  }
}

export class Cart {
  id?: string;
  user: string;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.user = newObj && newObj.user ? newObj.user : null;
  }
}

export class CartItem {
  id?: string;
  product: Product;
  quantity: number;

  constructor(newObj?: any) {
    this.id = newObj && newObj.id ? newObj.id : null;
    this.product = newObj && newObj.product ? new Product(newObj.product) : new Product();
    this.quantity = newObj && newObj.quantity ? newObj.quantity : null;
  }
}
