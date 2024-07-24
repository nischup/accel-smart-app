import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDeviceAddedPage } from './home-device-added.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDeviceAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDeviceAddedPageRoutingModule {}
