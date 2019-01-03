import { Component, OnInit } from '@angular/core';
import {User} from '../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: Array<User>;
  tableColumns = Object.keys(new User());

  constructor() { }

  ngOnInit() {
    console.log(this.tableColumns);
    this.usersList = [
      new User({
        id: 1,
        fullname: 'Mirciulica Pop Gabor',
        username: 'mirci.scumpix.94',
        email: 'caca@caca.cc',
        address: 'La munca',
        role: 'admin'
      }),
      new User({
        id: 2,
        fullname: 'Joaca-bine Mirel',
        username: 'joaca-bine.94',
        email: 'dorel@caca.cc',
        address: 'La munca',
        role: 'customer'
      }),
      new User({
        id: 3,
        fullname: 'Vacagrasa Vergenica Aurela-Eusebiu del Mare',
        username: 'joaca-bine.94',
        email: 'asd@caca.cc',
        address: 'La munca',
        role: 'employee'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
      new User({
        id: 4,
        fullname: 'Pit Bred',
        username: 'pit-breh.12',
        email: 'pite-breh@caca.cc',
        address: 'La ma-ta',
        role: 'admin'
      }),
    ]
  }

}
