import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PairingTwoPage } from './pairing-two.page';

const routes: Routes = [
  {
    path: '',
    component: PairingTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairingTwoPageRoutingModule {}
