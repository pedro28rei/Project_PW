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

    navigateToLogin() {
      this.router.navigate(['login']);
    }
}
