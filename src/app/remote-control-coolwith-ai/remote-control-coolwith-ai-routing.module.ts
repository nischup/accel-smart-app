import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteControlCoolwithAiPage } from './remote-control-coolwith-ai.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteControlCoolwithAiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteControlCoolwithAiPageRoutingModule {}
