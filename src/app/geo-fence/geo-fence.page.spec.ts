import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoFencePage } from './geo-fence.page';

describe('GeoFencePage', () => {
  let component: GeoFencePage;
  let fixture: ComponentFixture<GeoFencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
