import {Component, Injectable, OnInit} from '@angular/core';
import {User} from '../models';
import {NetworkingService} from '../networking/networking.service';
import {Router} from '@angular/router';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class UsersComponent implements OnInit {
  usersList: User[];
  tableColumns = Object.keys(new User()).filter(key => key !== 'password');

  constructor(private router: Router, private networking: NetworkingService, private dataService: DataService) { }

  ngOnInit() {
    this.tableColumns.push('Edit');
    this.tableColumns.push('Delete');
    console.log(this.tableColumns);
    this.usersList = [];
    this.networking.getUsers()
      .subscribe(users => this.usersList = users);
  }

  add() {
    this.router.navigate(['/user-form']);
  }

  edit(user: User) {
    this.dataService.setUser(user);
    this.router.navigate(['/user-form']);
  }

  delete(user: User) {
    this.networking.deleteUser(user)
      .subscribe(deletedUser => this.usersList = this.usersList.filter(element => element.id !== deletedUser.id));
  }

}
