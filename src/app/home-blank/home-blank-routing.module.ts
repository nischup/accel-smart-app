import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBlankPage } from './home-blank.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBlankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBlankPageRoutingModule {}
