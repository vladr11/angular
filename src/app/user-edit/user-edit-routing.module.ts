import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserEditComponent} from './user-edit.component';

const userEditRoutes: Routes = [
  {
    path: '',
    component: UserEditComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(userEditRoutes)],
  exports: [RouterModule]
})
export class UserEditRoutingModule {
}
