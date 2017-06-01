import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SQLite } from '@ionic-native/sqlite';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { AboutModule } from '../pages/about/about.module';
import { ContatosPageModule } from "../pages/contatos/contatos.module";
import { ContatosFormPageModule } from "../pages/contatos-form/contatos-form.module";
import { GameDetailPageModule } from "../pages/game-detail/game-detail.module";
import { GameFormPageModule } from '../pages/game-form/game-form.module';
import { GameListPageModule } from '../pages/game-list/game-list.module';
import { HomeModule } from '../pages/home/home.module';
import { MapsPageModule } from "../pages/maps/maps.module";
import { MapsDetailPageModule } from "../pages/maps-detail/maps-detail.module";
import { PostDetailModule } from '../pages/post-detail/post-detail.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { UserDetailPageModule } from "../pages/user-detail/user-detail.module";
import { UserFormPageModule } from "../pages/user-form/user-form.module";
import { UserListPageModule } from "../pages/user-list/user-list.module";

import { DatabaseProvider } from '../providers/database/database';

import { MyApp } from './app.component';
import { Contacts } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { Diagnostic } from '@ionic-native/diagnostic';
import { DbmanagerProvider } from '../providers/dbmanager/dbmanager';
import { IonicStorageModule } from '@ionic/storage/es2015';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp, { preloadModules: true }),
    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AboutModule,
    ContatosPageModule,
    ContatosFormPageModule,
    GameDetailPageModule,
    GameFormPageModule,
    GameListPageModule,
    HomeModule,
    MapsPageModule,
    MapsDetailPageModule,
    PostDetailModule,
    TabsModule,
    UserDetailPageModule,
    UserFormPageModule,
    UserListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    GoogleMaps,
    Geolocation,
    Contacts,
    SMS,
    Diagnostic,
    DatabaseProvider,
    DbmanagerProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}
