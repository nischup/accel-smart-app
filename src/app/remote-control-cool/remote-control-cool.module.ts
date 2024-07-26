import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlCoolPageRoutingModule } from './remote-control-cool-routing.module';

import { RemoteControlCoolPage } from './remote-control-cool.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlCoolPageRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [RemoteControlCoolPage]
})
export class RemoteControlCoolPageModule {}
