import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDeviceAddedPageRoutingModule } from './home-device-added-routing.module';

import { HomeDeviceAddedPage } from './home-device-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDeviceAddedPageRoutingModule
  ],
  declarations: [HomeDeviceAddedPage]
})
export class HomeDeviceAddedPageModule {}
