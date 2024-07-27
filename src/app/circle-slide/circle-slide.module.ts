import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleSlidePageRoutingModule } from './circle-slide-routing.module';

import { CircleSlidePage } from './circle-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleSlidePageRoutingModule
  ],
  declarations: [CircleSlidePage]
})
export class CircleSlidePageModule {}
