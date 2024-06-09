import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  standalone: true,
  imports: [],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.css'
})
export class RegistComponent {

    constructor(private router: Router) {}

    // Function that take user to home page
    navigateToHome() {
      this.router.navigate(['/home']);
    }

    // Function that take user to login page
    navigateToLogin() {
      this.router.navigate(['login']);
    }

    // Function that regist user on the website
    registUser(){
      
      var email = (<HTMLInputElement>document.getElementById("email")).value;
      var password = (<HTMLInputElement>document.getElementById("password")).value;
  
      // Verification of user credentials
      if (email === "" || password === "") {  alert("Invalid Credentials");} 
      else { this.router.navigate(['/home']);}
    }
}
