import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PairingTwoPageRoutingModule } from './pairing-two-routing.module';

import { PairingTwoPage } from './pairing-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PairingTwoPageRoutingModule
  ],
  declarations: [PairingTwoPage]
})
export class PairingTwoPageModule {}
