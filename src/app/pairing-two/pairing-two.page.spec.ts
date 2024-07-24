import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PairingTwoPage } from './pairing-two.page';

describe('PairingTwoPage', () => {
  let component: PairingTwoPage;
  let fixture: ComponentFixture<PairingTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
