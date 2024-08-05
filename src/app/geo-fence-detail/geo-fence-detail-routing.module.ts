import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoFenceDetailPage } from './geo-fence-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GeoFenceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoFenceDetailPageRoutingModule {}
