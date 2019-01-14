import { Component, OnInit } from '@angular/core';
import {User} from '../models';
import {Location} from '@angular/common';
import {NetworkingService} from '../networking/networking.service';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  isEdit: boolean;
  user: User;

  constructor(private location: Location, private networking: NetworkingService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.dataService.getUser();
    if (this.user == null) {
      this.user = new User();
      this.user.role = 'customer';
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  addUser() {
    console.log('ADD');
    const component = this;
    this.networking.addUser(this.user)
      .subscribe(function (user) {
        alert('Success!');
        component.location.back();
      });
  }

  editUser() {
    console.log('EDIT');
    const component = this;
    this.networking.updateUser(this.user)
      .subscribe(function (user) {
        alert('Success!');
        component.location.back();
      });
  }

}
