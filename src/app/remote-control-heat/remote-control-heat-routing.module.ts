import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteControlHeatPage } from './remote-control-heat.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteControlHeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteControlHeatPageRoutingModule {}
