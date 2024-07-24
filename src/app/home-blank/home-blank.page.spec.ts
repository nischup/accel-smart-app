import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBlankPage } from './home-blank.page';

describe('HomeBlankPage', () => {
  let component: HomeBlankPage;
  let fixture: ComponentFixture<HomeBlankPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
