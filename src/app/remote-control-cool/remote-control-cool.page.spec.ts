import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteControlCoolPage } from './remote-control-cool.page';

describe('RemoteControlCoolPage', () => {
  let component: RemoteControlCoolPage;
  let fixture: ComponentFixture<RemoteControlCoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlCoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
