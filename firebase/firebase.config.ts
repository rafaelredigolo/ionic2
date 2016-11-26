import { Injectable } from '@angular/core';
import Firebase from 'firebase';

@Injectable()
export class Fire {
  public firebase: any;    
  constructor() {
    var config = {
      apiKey: "your data",
      authDomain: "your data",
      databaseURL: "your data",
      storageBucket: "your data",
      messagingSenderId: "your data"
    };

    Firebase.initializeApp(config);
  }

  getDb() {    
    return Firebase;
  }
  
  login(token: string, successCallback, errorCallback){
    let credential = Firebase.auth.FacebookAuthProvider.credential(token);

    Firebase.auth().signInWithCredential(credential).then((response) => {
      this.setUser(token, response.providerData[0]);
      successCallback(response);
    }, (error) => {
      errorCallback(error);
    })
  }

  loginStatus(successCallback, errorCallback) {
    Firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setUser("", user);
        successCallback(user);
      } else {
        errorCallback('error');
      }
    })
  }

  private setUser(token: string, authData: any) {
    this.user.name = authData.displayName;
    this.user.email = authData.email;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = token;
  }

}
