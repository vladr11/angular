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

    const component = this;

    this.networking.login(this.username, this.password)
      .pipe(catchError(error => {
        this.showError(error.error.message)
        return '{"role":"invalid"}';
      }))
      .subscribe(function (role: string) {
        if (role === 'administrator') {
          console.log('We have an admin');
          component.router.navigate(['/users']);
        } else if (role === 'employee') {
          console.log('We have an employee');
          component.router.navigate(['/products']);
        } else if (role === 'customer') {
          console.log('We have a customer');
          component.router.navigate(['/products']);
        } else {
          console.log(`Not so good: ${role}`);
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
