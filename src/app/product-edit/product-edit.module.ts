import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditRoutingModule} from './product-edit-routing.module';
import {FormsModule} from '@angular/forms';
import {ProductEditComponent} from './product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    FormsModule
  ],
  declarations: [ProductEditComponent],
})
export class ProductEditModule {
}
