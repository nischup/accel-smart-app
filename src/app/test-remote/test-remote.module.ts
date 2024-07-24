import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRemotePageRoutingModule } from './test-remote-routing.module';

import { TestRemotePage } from './test-remote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestRemotePageRoutingModule
  ],
  declarations: [TestRemotePage]
})
export class TestRemotePageModule {}
