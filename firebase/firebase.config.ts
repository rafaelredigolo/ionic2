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

}
