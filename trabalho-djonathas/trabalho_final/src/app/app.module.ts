import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {DBManager} from "../providers/db-manager";

import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {MapsPage} from "../pages/maps/maps";
import {PessoaListPage} from "../pages/pessoas/list";
import {PessoaCreatePage} from "../pages/pessoas/create";
import {PessoaDetailsPage} from "../pages/pessoas/details";
import {ContatosPage} from "../pages/contatos/contatos";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {DeviceMotion} from "@ionic-native/device-motion";
import {Geolocation} from "@ionic-native/geolocation";
import {GoogleMaps} from "@ionic-native/google-maps";
import {Contacts} from "@ionic-native/contacts";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage,
    PessoaListPage,
    PessoaCreatePage,
    PessoaDetailsPage,
    ContatosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapsPage,
    PessoaListPage,
    PessoaCreatePage,
    PessoaDetailsPage,
    ContatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    Geolocation,
    GoogleMaps,
    Contacts,
    DBManager,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
