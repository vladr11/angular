import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  showErrors: boolean;

  constructor(private router: Router) {
  }

  login() {
    console.log(this.username);
    console.log(this.password);


    // if is Admin
    // this.router.navigate(['/users']);
    // if is Employee
    // this.router.navigate(['/product-edit']);
    // if is Customer
    // this.router.navigate(['/products']);

  }

  private showErrors() {
    this.showErrors = true;
  }
}
