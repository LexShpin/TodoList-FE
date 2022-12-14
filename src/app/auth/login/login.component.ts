import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  public onLogin(loginForm: NgForm): void {
    document.getElementById('loginForm')?.click();
    this.authService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
        loginForm.reset();
        this.router.navigate(['todos']);
      },
      (error) => {
        console.log(error.message);
        loginForm.reset();
      }
    )
  }
}
