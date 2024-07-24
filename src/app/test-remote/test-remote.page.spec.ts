import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestRemotePage } from './test-remote.page';

describe('TestRemotePage', () => {
  let component: TestRemotePage;
  let fixture: ComponentFixture<TestRemotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRemotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
