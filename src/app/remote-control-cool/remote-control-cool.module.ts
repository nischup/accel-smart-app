import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlCoolPageRoutingModule } from './remote-control-cool-routing.module';

import { RemoteControlCoolPage } from './remote-control-cool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlCoolPageRoutingModule
  ],
  declarations: [RemoteControlCoolPage]
})
export class RemoteControlCoolPageModule {}
