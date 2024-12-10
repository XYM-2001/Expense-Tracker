import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

.full-width {
  width: 100%;
}
mat-card {
  max-width: 400px;
  margin: 2rem auto;
}
