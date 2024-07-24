import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAcPage } from './select-ac.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAcPageRoutingModule {}
