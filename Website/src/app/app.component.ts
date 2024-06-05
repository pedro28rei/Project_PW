import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'websitemuseus';
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
