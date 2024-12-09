import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.model).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/expenses']);
    }, error => {
      console.error('Login failed', error);
    });
  }
}
