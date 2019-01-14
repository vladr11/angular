import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  }, {
    path: 'user-form',
    loadChildren: './user-edit/user-edit.module#UserEditModule'
  }, {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  }, {
    path: 'product-edit',
    loadChildren: './product-edit/product-edit.module#ProductEditModule'
  }, {
    path: 'shopping-cart',
    loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
