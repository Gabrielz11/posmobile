import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//My prividers
import { UserService } from '../providers/user-service';

import { ContatosPage } from '../pages/contatos/contatos';
import { ListPage } from '../pages/list/list';
import { MultimediaPage } from '../pages/multimedia/multimedia';
import { UsaCameraPage } from '../pages/usacamera/usacamera';
import { HttpPage } from '../pages/http/http';
import { BancoPage } from '../pages/banco/banco';
import { MapPage } from '../pages/map/map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public userService: UserService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'LocalStorage', component: MapPage },
      { title: 'Acelerometro', component: ListPage },
      { title: 'Geolocation', component: MapPage },
      { title: 'Maps', component: MapPage },
      { title: 'Contatos', component: ContatosPage },
      { title: 'Media', component: MultimediaPage },
      { title: 'Camera', component: UsaCameraPage },
      { title: 'http', component: HttpPage },
      { title: 'indexedDB, SQlite, websql', component: BancoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.userService.openDB();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
