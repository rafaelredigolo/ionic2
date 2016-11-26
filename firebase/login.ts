import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { FacebookLogin } from '../../providers/facebook-login'; 
import { Fire } from '../../providers/fire';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private fireSrv: Fire) {
    
  }

  onLogin() {
    FacebookLogin.login((response) => {
      this.fireSrv.login(response, (response) => {
        this.navCtrl.setRoot(HomePage);
      }, (error) => {

      })
    }, (error) => {
      alert(error);
    });
  }

}
