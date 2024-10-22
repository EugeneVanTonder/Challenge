import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login with:', this.username, this.password);
    this.router.navigate(['/challenges']);
  }

  onSignUp() {
    console.log('Sign Up tapped');
    // TODO: Implement sign up navigation or modal
  }

  onForgotPassword() {
    console.log('Forgot Password tapped');
    // TODO: Implement forgot password functionality
  }
}