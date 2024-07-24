import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PairingFourPageRoutingModule } from './pairing-four-routing.module';

import { PairingFourPage } from './pairing-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PairingFourPageRoutingModule
  ],
  declarations: [PairingFourPage]
})
export class PairingFourPageModule {}
