import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteControlDryPage } from './remote-control-dry.page';

describe('RemoteControlDryPage', () => {
  let component: RemoteControlDryPage;
  let fixture: ComponentFixture<RemoteControlDryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlDryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
