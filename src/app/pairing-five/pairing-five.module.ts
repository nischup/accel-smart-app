import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PairingFivePageRoutingModule } from './pairing-five-routing.module';

import { PairingFivePage } from './pairing-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PairingFivePageRoutingModule
  ],
  declarations: [PairingFivePage]
})
export class PairingFivePageModule {}
