import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {

  constructor(private authService: AuthService, private router: Router) {}

  public onRegister(registrationForm: NgForm): void {
    document.getElementById('registrationForm')?.click();
    this.authService.register(registrationForm.value).subscribe(
      (response) => {
        console.log(response);
        registrationForm.reset();
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error.message);
      }
    )
  }
}
