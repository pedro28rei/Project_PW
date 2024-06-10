import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsptComponent } from './contactspt.component';

describe('ContactsptComponent', () => {
  let component: ContactsptComponent;
  let fixture: ComponentFixture<ContactsptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
