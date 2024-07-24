import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginNewPasswordPage } from './login-new-password.page';

const routes: Routes = [
  {
    path: '',
    component: LoginNewPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginNewPasswordPageRoutingModule {}
