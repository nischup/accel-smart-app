import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PairingFivePage } from './pairing-five.page';

describe('PairingFivePage', () => {
  let component: PairingFivePage;
  let fixture: ComponentFixture<PairingFivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
