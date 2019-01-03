import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
