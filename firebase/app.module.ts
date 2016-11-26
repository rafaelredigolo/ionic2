import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


import { Fire } from '../providers/fire';
import { FacebookLogin } from '../providers/facebook-login';


@NgModule({
  declarations: [
    seus dados
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    seus dados
  ],
  providers: [
    Fire,
    FacebookLogin
  ]
})
export class AppModule {}
