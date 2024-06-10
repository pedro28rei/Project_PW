import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeptComponent } from './homept.component';

describe('HomeptComponent', () => {
  let component: HomeptComponent;
  let fixture: ComponentFixture<HomeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
