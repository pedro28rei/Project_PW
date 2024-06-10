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
    { id: 1, title: 'Louvre Museum', imagesrc:'../../assets/images/museuLouvre.jpg' }, 
    { id: 4, title: 'Prado Museum', imagesrc:'../../assets/images/MuseuDoPrado.jpg' }, 
    { id: 2, title: 'Coches Museum', imagesrc:'../../assets/images/MuseuDosCoches.jpg' },
    { id: 3, title:  'Vatican Museum', imagesrc:'../../assets/images/MuseuDoVaticano.jpg'},
    { id: 5, title: 'Modern Art Museum', imagesrc: '../../assets/images/MuseuArteModerna.png'},
    { id: 6, title: 'National Museum of China', imagesrc: '../../assets/images/MuseuDaChina.png'},
  ];

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/museum', id]);
  }

  changeLanguage(){
    this.router.navigate(['/pt']);
  }
}
