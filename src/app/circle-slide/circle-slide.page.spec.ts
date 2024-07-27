import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircleSlidePage } from './circle-slide.page';

describe('CircleSlidePage', () => {
  let component: CircleSlidePage;
  let fixture: ComponentFixture<CircleSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
