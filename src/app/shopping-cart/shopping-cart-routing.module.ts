import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart.component';

const shoppingCartRoutes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingCartRoutes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {
}
