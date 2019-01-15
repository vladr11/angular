import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NetworkingService} from '../networking/networking.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  showsErrors: boolean;
  errorMessage: string;

  constructor(private router: Router, private networking: NetworkingService) {
  }

  login() {
    console.log(this.username);
    console.log(this.password);

    this.networking.login(this.username, this.password)
      .subscribe((role: string) => {
        if (role === 'administrator') {
          console.log('We have an admin');
          this.router.navigate(['/users']);
        } else if (role === 'employee') {
          console.log('We have an employee');
          this.router.navigate(['/products']);
        } else if (role === 'customer') {
          console.log('We have a customer');
          this.router.navigate(['/shopping-cart']);
        } else {
          this.showError('Something went wrong');
        }
      });
  }

  private showError(error: string) {
    this.errorMessage = error;
    this.showsErrors = true;
  }

  private clearError() {
    this.errorMessage = '';
    this.showsErrors = false;
  }
}
