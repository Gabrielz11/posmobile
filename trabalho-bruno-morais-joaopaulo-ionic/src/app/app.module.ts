import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { ContatosPage } from '../pages/contatos/contatos';
import { HttpPage } from '../pages/http/http';
import { ContatosDetalhePage } from '../pages/contatosdetalhe/contatosdetalhe';
import { ListPage } from '../pages/list/list';
import { MultimediaPage } from '../pages/multimedia/multimedia';
import { UsaCameraPage } from '../pages/usacamera/usacamera';
import { BancoPage } from '../pages/banco/banco';
import { MapPage } from '../pages/map/map';
import { NewPlacePage } from '../pages/new-place/new-place';
import { PlacePage } from '../pages/place/place';

import { UserProvider } from '../providers/user-provider';
import { UserService } from '../providers/user-service';
import { PlacesService} from '../providers/places-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicAudioModule } from 'ionic-audio';
import { Contacts } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    ContatosPage,
    ContatosDetalhePage,
    ListPage,
    MultimediaPage,
    HttpPage,
    UsaCameraPage,
    BancoPage,
    MapPage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyAIB1B2qzMmZKKZFdNEfCVB1r80TcqVml8'
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContatosPage,
    ContatosDetalhePage,
    ListPage,
    MultimediaPage,
    HttpPage,
    BancoPage,
    UsaCameraPage,
    MapPage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    UserProvider,
    Contacts,
    Diagnostic,
    File,
    Transfer,
    FilePath,
    UserService,
    PlacesService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
