import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteControlHeatPage } from './remote-control-heat.page';

describe('RemoteControlHeatPage', () => {
  let component: RemoteControlHeatPage;
  let fixture: ComponentFixture<RemoteControlHeatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlHeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
