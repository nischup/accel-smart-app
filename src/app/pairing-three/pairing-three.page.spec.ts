import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PairingThreePage } from './pairing-three.page';

describe('PairingThreePage', () => {
  let component: PairingThreePage;
  let fixture: ComponentFixture<PairingThreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PairingThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
