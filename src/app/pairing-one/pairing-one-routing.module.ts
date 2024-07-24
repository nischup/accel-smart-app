import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PairingOnePage } from './pairing-one.page';

const routes: Routes = [
  {
    path: '',
    component: PairingOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairingOnePageRoutingModule {}
