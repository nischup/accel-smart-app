import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PairingOnePage } from './pairing-one.page';

describe('PairingOnePage', () => {
  let component: PairingOnePage;
  let fixture: ComponentFixture<PairingOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
