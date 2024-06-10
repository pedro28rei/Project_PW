import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportptComponent } from './supportpt.component';

describe('SupportptComponent', () => {
  let component: SupportptComponent;
  let fixture: ComponentFixture<SupportptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
