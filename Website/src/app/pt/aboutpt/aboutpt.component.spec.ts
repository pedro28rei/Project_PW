import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutptComponent } from './aboutpt.component';

describe('AboutptComponent', () => {
  let component: AboutptComponent;
  let fixture: ComponentFixture<AboutptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
