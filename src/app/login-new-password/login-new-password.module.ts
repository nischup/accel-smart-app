import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginNewPasswordPageRoutingModule } from './login-new-password-routing.module';

import { LoginNewPasswordPage } from './login-new-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginNewPasswordPageRoutingModule
  ],
  declarations: [LoginNewPasswordPage]
})
export class LoginNewPasswordPageModule {}
