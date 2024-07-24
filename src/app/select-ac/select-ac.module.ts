import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAcPageRoutingModule } from './select-ac-routing.module';

import { SelectAcPage } from './select-ac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAcPageRoutingModule
  ],
  declarations: [SelectAcPage]
})
export class SelectAcPageModule {}
