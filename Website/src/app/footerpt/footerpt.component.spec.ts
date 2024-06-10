import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterptComponent } from './footerpt.component';

describe('FooterptComponent', () => {
  let component: FooterptComponent;
  let fixture: ComponentFixture<FooterptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
