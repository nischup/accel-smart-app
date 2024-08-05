import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoFenceDetailPageRoutingModule } from './geo-fence-detail-routing.module';

import { GeoFenceDetailPage } from './geo-fence-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoFenceDetailPageRoutingModule
  ],
  declarations: [GeoFenceDetailPage]
})
export class GeoFenceDetailPageModule {}
