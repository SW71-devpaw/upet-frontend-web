import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsPetOwnerComponent } from './clinics-pet-owner.component';

describe('ClinicsPetOwnerComponent', () => {
  let component: ClinicsPetOwnerComponent;
  let fixture: ComponentFixture<ClinicsPetOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsPetOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsPetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
