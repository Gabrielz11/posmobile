import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {HttpModule} from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Contacts} from '@ionic-native/contacts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoDetail } from '../pages/contato-detail/contato-detail';
import { AgendaOnline } from '../pages/agenda-online/agenda-online';
import { Contatos } from '../pages/contatos/contatos';
import { ContatosLocalDetalhes } from '../pages/contatos-local-detalhes/contatos-local-detalhes';
import { ContactPosition } from '../pages/contact-position/contact-position';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { Status } from '../pages/status/status';

import { MediaCapture } from '@ionic-native/media-capture';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';

import {PaginaBootstrap  } from '../pages/pagina-bootstrap/pagina-bootstrap';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContatoDetail,
    AgendaOnline,
    Contatos,
    ContatosLocalDetalhes,
    ContactPosition,
    Status,
    PaginaBootstrap
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContatoDetail,
    AgendaOnline,
    Contatos,
    ContatosLocalDetalhes,
    ContactPosition,
    Status,
    PaginaBootstrap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Contacts,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaCapture, Camera
  ]
})
export class AppModule {}
