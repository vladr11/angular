import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductEditComponent} from './product-edit.component';

const productEditRoutes: Routes = [
  {
    path: '',
    component: ProductEditComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(productEditRoutes)],
  exports: [RouterModule]
})
export class ProductEditRoutingModule {
}
