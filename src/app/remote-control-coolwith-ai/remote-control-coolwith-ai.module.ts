import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteControlCoolwithAiPageRoutingModule } from './remote-control-coolwith-ai-routing.module';

import { RemoteControlCoolwithAiPage } from './remote-control-coolwith-ai.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteControlCoolwithAiPageRoutingModule,
    NgCircleProgressModule,
  ],
  declarations: [RemoteControlCoolwithAiPage]
})
export class RemoteControlCoolwithAiPageModule {}
