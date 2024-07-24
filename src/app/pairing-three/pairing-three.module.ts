import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PairingThreePageRoutingModule } from './pairing-three-routing.module';

import { PairingThreePage } from './pairing-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PairingThreePageRoutingModule
  ],
  declarations: [PairingThreePage]
})
export class PairingThreePageModule {}
