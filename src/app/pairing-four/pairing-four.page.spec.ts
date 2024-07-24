import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PairingFourPage } from './pairing-four.page';

describe('PairingFourPage', () => {
  let component: PairingFourPage;
  let fixture: ComponentFixture<PairingFourPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
