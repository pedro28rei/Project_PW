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
    { id: 1, title: 'Louvre', imagesrc:'../../assets/images/museuLouvre.jpg' }, 
    { id: 4, title: 'Prado', imagesrc:'../../assets/images/MuseuDoPrado.jpg' }, 
    { id: 2, title: 'Coches', imagesrc:'../../assets/images/MuseuDosCoches.jpg' },
    { id: 3, title:  'Vatican', imagesrc:'../../assets/images/MuseuDoVaticano.jpg'}
  ];

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/museum', id]);
  }

  changeLanguage(){
    this.router.navigate(['/pt']);
  }
}
