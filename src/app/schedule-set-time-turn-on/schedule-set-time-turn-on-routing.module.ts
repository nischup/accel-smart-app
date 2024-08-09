import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleSetTimeTurnOnPage } from './schedule-set-time-turn-on.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleSetTimeTurnOnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleSetTimeTurnOnPageRoutingModule {}
