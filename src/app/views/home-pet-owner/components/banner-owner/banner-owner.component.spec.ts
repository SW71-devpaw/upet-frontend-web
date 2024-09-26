import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOwnerComponent } from './banner-owner.component';

describe('BannerOwnerComponent', () => {
  let component: BannerOwnerComponent;
  let fixture: ComponentFixture<BannerOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
