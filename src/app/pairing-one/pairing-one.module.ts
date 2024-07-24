import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PairingOnePageRoutingModule } from './pairing-one-routing.module';

import { PairingOnePage } from './pairing-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PairingOnePageRoutingModule
  ],
  declarations: [PairingOnePage]
})
export class PairingOnePageModule {}
