import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteControlDryPage } from './remote-control-dry.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteControlDryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteControlDryPageRoutingModule {}
