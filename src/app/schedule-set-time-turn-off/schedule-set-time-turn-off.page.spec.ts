import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleSetTimeTurnOffPage } from './schedule-set-time-turn-off.page';

describe('ScheduleSetTimeTurnOffPage', () => {
  let component: ScheduleSetTimeTurnOffPage;
  let fixture: ComponentFixture<ScheduleSetTimeTurnOffPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSetTimeTurnOffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
