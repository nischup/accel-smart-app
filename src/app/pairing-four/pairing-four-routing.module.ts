import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PairingFourPage } from './pairing-four.page';

const routes: Routes = [
  {
    path: '',
    component: PairingFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairingFourPageRoutingModule {}
