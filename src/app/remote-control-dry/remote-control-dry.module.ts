import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlDryPageRoutingModule } from './remote-control-dry-routing.module';

import { RemoteControlDryPage } from './remote-control-dry.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlDryPageRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [RemoteControlDryPage]
})
export class RemoteControlDryPageModule {}
