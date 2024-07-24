import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRemotePage } from './test-remote.page';

const routes: Routes = [
  {
    path: '',
    component: TestRemotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRemotePageRoutingModule {}
