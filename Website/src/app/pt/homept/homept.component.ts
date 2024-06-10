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
    { id: 1, title: 'Louvre', imagesrc:'../../../assets/images/museuLouvre.jpg' }, 
    { id: 4, title: 'Prado', imagesrc:'../../../assets/images/MuseuDoPrado.jpg' }, 
    { id: 2, title: 'Coches', imagesrc:'../../../assets/images/MuseuDosCoches.jpg' },
    { id: 3, title:  'Vaticano', imagesrc:'../../../assets/images/MuseuDoVaticano.jpg'}
  ];

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/pt/museum', id]);
  }

  changeLanguage(){
    this.router.navigate(['/']);
  }
}

