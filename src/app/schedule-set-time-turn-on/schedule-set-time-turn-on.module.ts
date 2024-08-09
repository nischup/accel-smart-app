import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleSetTimeTurnOnPageRoutingModule } from './schedule-set-time-turn-on-routing.module';

import { ScheduleSetTimeTurnOnPage } from './schedule-set-time-turn-on.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleSetTimeTurnOnPageRoutingModule
  ],
  declarations: [ScheduleSetTimeTurnOnPage]
})
export class ScheduleSetTimeTurnOnPageModule {}
