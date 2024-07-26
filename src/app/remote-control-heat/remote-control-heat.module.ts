import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlHeatPageRoutingModule } from './remote-control-heat-routing.module';

import { RemoteControlHeatPage } from './remote-control-heat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlHeatPageRoutingModule
  ],
  declarations: [RemoteControlHeatPage]
})
export class RemoteControlHeatPageModule {}
