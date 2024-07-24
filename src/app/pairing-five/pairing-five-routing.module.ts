import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PairingFivePage } from './pairing-five.page';

const routes: Routes = [
  {
    path: '',
    component: PairingFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairingFivePageRoutingModule {}
