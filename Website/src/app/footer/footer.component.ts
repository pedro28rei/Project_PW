import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const navigateH = document.getElementById('navigateHome');
      if (navigateH) {
        navigateH.addEventListener('click', () => {
          this.router.navigate(['/']);
        });
      }
      const navigateR = document.getElementById('navigateLogin');
      if (navigateR) {
        navigateR.addEventListener('click', () => {
          this.router.navigate(['/login']);
        });
      }

      const navigateA = document.getElementById('navigateAbout');
      if (navigateA) {
        navigateA.addEventListener('click', () => {
          this.router.navigate(['/about']);
        });
      }
      
      const navigateC = document.getElementById('navigateContacts');
      if (navigateC) {
        navigateC.addEventListener('click', () => {
          this.router.navigate(['/contacts']);
        });
      }
      
      const navigateS = document.getElementById('navigateSupport');
      if (navigateS) {
        navigateS.addEventListener('click', () => {
          this.router.navigate(['/support']);
        });
      }
    }
  }

}
