import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent  } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'websitemuseus';
  showFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showFooter = this.checkIfFooterShouldBeVisible(event.urlAfterRedirects);
    });
  }

  checkIfFooterShouldBeVisible(url: string): boolean {
    const noFooterRoutes = ['/login', '/regist'];
    return !noFooterRoutes.some(route => url.includes(route));
  }
}
