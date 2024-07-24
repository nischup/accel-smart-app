import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBlankPageRoutingModule } from './home-blank-routing.module';

import { HomeBlankPage } from './home-blank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBlankPageRoutingModule
  ],
  declarations: [HomeBlankPage]
})
export class HomeBlankPageModule {}
