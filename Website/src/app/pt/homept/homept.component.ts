import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homept',
  standalone: true,
  imports: [],
  templateUrl: './homept.component.html',
  styleUrl: './homept.component.css'
})
export class HomeptComponent {
  
  museums = [
    { id: 1, title: 'Museu do Louvre', imagesrc:'../../../assets/images/museuLouvre.jpg' }, 
    { id: 4, title: 'Museu do Prado', imagesrc:'../../../assets/images/MuseuDoPrado.jpg' }, 
    { id: 2, title: 'Museu dos Coches', imagesrc:'../../../assets/images/MuseuDosCoches.jpg' },
    { id: 3, title:  'Museu do Vaticano', imagesrc:'../../../assets/images/MuseuDoVaticano.jpg'},
    { id: 5, title: 'Museu de Arte Moderna', imagesrc: '../../../assets/images/MuseuArteModerna.png'},
    { id: 6, title: 'Museu Nacional da China', imagesrc: '../../../assets/images/MuseuDaChina.png'},
  ];

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/pt/museum', id]);
  }

  changeLanguage(){
    this.router.navigate(['/']);
  }
}

