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
    console.log('Login attempt with:', this.username, this.password);
    // Implement login logic here
    this.router.navigate(['/challenges']);
  }

  onSocialLogin(provider: string) {
    console.log(`Social login attempt with ${provider}`);
    // Implement social login logic here
    this.router.navigate(['/challenges']);
  }

  onSignUp(event: Event) {
    event.preventDefault();
    console.log('Sign Up clicked');
    // Implement navigation to sign up page or open sign up modal
    // For now, we'll just log a message
    console.log('Navigate to sign up page');
  }
}