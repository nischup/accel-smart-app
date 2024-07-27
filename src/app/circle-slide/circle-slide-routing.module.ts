import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircleSlidePage } from './circle-slide.page';

const routes: Routes = [
  {
    path: '',
    component: CircleSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircleSlidePageRoutingModule {}
