import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PairingThreePage } from './pairing-three.page';

const routes: Routes = [
  {
    path: '',
    component: PairingThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairingThreePageRoutingModule {}
