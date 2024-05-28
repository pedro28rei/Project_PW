import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-angular-databases',
  standalone: true,
  imports: [],
  templateUrl: './teste-angular-databases.component.html',
  styleUrl: './teste-angular-databases.component.css'
})
export class TesteAngularDatabasesComponent {
  employees = [
    { name: 'John Doe', position: 'Developer', office: 'New York', age: 30, startDate: '2012/12/12', salary: '$320,800' },
    { name: 'Jane Smith', position: 'Designer', office: 'London', age: 27, startDate: '2014/04/25', salary: '$170,750' }
    // more employees
  ];
}
