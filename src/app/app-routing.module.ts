import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

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
    path: 'user-edit',
    loadChildren: './users/users.module#UsersModule'
  }, {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  }, {
    path: 'product-edit',
    loadChildren: './product-edit/product-edit.module#ProductEditModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
