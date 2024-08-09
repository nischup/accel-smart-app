import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleSetTimeTurnOffPageRoutingModule } from './schedule-set-time-turn-off-routing.module';

import { ScheduleSetTimeTurnOffPage } from './schedule-set-time-turn-off.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleSetTimeTurnOffPageRoutingModule
  ],
  declarations: [ScheduleSetTimeTurnOffPage]
})
export class ScheduleSetTimeTurnOffPageModule {}
