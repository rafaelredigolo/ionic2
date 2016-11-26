import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';

@Injectable()
export class FacebookLogin {

  static login(successCallback, errorCallback){
    Facebook.login(['user_friends','email']).then((response) => {
      successCallback(response.authResponse.accessToken);
    }, (error) => {
      errorCallback(error);
    });
  }

  static loginStatus(successCallback, errorCallback) {
    Facebook.getLoginStatus().then((response) => {
      successCallback(response.status);
    })
  }

}
