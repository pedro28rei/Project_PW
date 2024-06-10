import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footerpt',
  standalone: true,
  imports: [],
  templateUrl: './footerpt.component.html',
  styleUrl: './footerpt.component.css'
})
export class FooterptComponent implements OnInit{

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const navigateH = document.getElementById('navigateHome');
      if (navigateH) {
        navigateH.addEventListener('click', () => {
          this.router.navigate(['/pt']);
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
          this.router.navigate(['/pt/about']);
        });
      }
      
      const navigateC = document.getElementById('navigateContacts');
      if (navigateC) {
        navigateC.addEventListener('click', () => {
          this.router.navigate(['/pt/contacts']);
        });
      }
      
      const navigateS = document.getElementById('navigateSupport');
      if (navigateS) {
        navigateS.addEventListener('click', () => {
          this.router.navigate(['/pt/support']);
        });
      }
    }
  }

}
