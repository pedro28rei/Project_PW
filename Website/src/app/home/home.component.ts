import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  museums = [
    { id: 1, title: 'Example 1', imagesrc:'../../assets/images/museuLouvre.jpg' }, 
    { id: 2, title: 'Example 2', imagesrc:'../../assets/images/museuLouvre2.jpg' }, 
    { id: 3, title: 'Example 3', imagesrc:'../../assets/images/museuLouvre3.jpg' }
  ];

  aux: number = 0;

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/museum', id]);
  }
}
