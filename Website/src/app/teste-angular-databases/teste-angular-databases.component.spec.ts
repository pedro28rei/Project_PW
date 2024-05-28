import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteAngularDatabasesComponent } from './teste-angular-databases.component';

describe('TesteAngularDatabasesComponent', () => {
  let component: TesteAngularDatabasesComponent;
  let fixture: ComponentFixture<TesteAngularDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteAngularDatabasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteAngularDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
