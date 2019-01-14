import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CookieService } from 'ngx-cookie-service';
import { NetworkingService } from './networking/networking.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService, NetworkingService, DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
