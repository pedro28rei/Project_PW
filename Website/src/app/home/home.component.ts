import { Component } from '@angular/core';
import { Router } from '@angular/router';

class Museum {
  id: number;
  name: string;
  src: string;

  constructor(id: number, name: string, src: string) {
    this.id = id;
    this.name = name;
    this.src = src;
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  museums: Museum[] = [
    new Museum(1, 'Exemplo 1', 'museuLouvre.jpg'),
    new Museum(2, 'Museu 2', 'museuLouvre2.jpg'),
    new Museum(3, 'Teste 3', 'museuLouvre3.jpg')
  ];

  aux: number = 0;

  constructor(private router: Router) {}

  openMuseum(id: number){
    this.router.navigate(['/museum', id]);
  }
}
