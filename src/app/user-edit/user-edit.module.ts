import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserEditComponent} from './user-edit.component';
import {UserEditRoutingModule} from './user-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserEditRoutingModule,
    FormsModule
  ],
  declarations: [UserEditComponent],
})
export class UserEditModule {
}
