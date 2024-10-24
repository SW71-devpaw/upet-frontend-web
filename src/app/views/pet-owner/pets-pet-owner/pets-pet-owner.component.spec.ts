import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPetOwnerComponent } from './pets-pet-owner.component';

describe('PetsPetOwnerComponent', () => {
  let component: PetsPetOwnerComponent;
  let fixture: ComponentFixture<PetsPetOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsPetOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
