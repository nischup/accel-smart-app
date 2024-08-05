import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoFenceDetailPage } from './geo-fence-detail.page';

describe('GeoFenceDetailPage', () => {
  let component: GeoFenceDetailPage;
  let fixture: ComponentFixture<GeoFenceDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFenceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
