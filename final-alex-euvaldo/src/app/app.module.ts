import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps} from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { MapsPage } from '../pages/maps/maps';
import { CameraPage } from '../pages/camera/camera';
import { HttpPage } from '../pages/http/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    MapsPage,
    CameraPage,
    HttpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    MapsPage,
    CameraPage,
    HttpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
