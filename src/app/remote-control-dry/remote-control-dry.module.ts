import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlDryPageRoutingModule } from './remote-control-dry-routing.module';

import { RemoteControlDryPage } from './remote-control-dry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlDryPageRoutingModule
  ],
  declarations: [RemoteControlDryPage]
})
export class RemoteControlDryPageModule {}
