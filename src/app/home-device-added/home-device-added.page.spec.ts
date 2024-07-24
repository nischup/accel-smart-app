import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDeviceAddedPage } from './home-device-added.page';

describe('HomeDeviceAddedPage', () => {
  let component: HomeDeviceAddedPage;
  let fixture: ComponentFixture<HomeDeviceAddedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDeviceAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
