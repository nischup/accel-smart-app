import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleSetTimeTurnOnPage } from './schedule-set-time-turn-on.page';

describe('ScheduleSetTimeTurnOnPage', () => {
  let component: ScheduleSetTimeTurnOnPage;
  let fixture: ComponentFixture<ScheduleSetTimeTurnOnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSetTimeTurnOnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
