import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.page.html',
  styleUrls: ['./login-password.page.scss'],
})
export class LoginPasswordPage implements OnInit {

  showPassword = false;
  
  constructor() { }

  ngOnInit() {
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
