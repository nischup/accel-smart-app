import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleSetTimeTurnOffPage } from './schedule-set-time-turn-off.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleSetTimeTurnOffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleSetTimeTurnOffPageRoutingModule {}
