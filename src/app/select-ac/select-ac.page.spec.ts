import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAcPage } from './select-ac.page';

describe('SelectAcPage', () => {
  let component: SelectAcPage;
  let fixture: ComponentFixture<SelectAcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
