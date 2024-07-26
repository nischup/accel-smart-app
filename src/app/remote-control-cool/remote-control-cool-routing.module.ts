import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteControlCoolPage } from './remote-control-cool.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteControlCoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteControlCoolPageRoutingModule {}
