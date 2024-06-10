import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumptComponent } from './museumpt.component';

describe('MuseumptComponent', () => {
  let component: MuseumptComponent;
  let fixture: ComponentFixture<MuseumptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuseumptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
