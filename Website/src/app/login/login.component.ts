import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}


  // Funtion that check user email and password and execute the login on the website
  loginUser() {

    var email = (<HTMLInputElement>document.getElementById("email-04")).value;
    var password = (<HTMLInputElement>document.getElementById("password-04")).value;

    // Verification of user credentials
    if (email === "" || password === "") {  alert("Invalid Credentials");} 
    else { this.router.navigate(['/home']);}

  }

  // Function that take user to home page
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  //Function that take user to regist page
  navigateToRegist() {
    this.router.navigate(['/regist'])
  }
}
