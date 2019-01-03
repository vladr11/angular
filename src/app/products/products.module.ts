import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {FormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {
}
