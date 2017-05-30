import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatabaseProvider } from '../providers/database/database';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { GameListPage } from '../pages/game-list/game-list';
import { UserListPage } from '../pages/user-list/user-list';
import { MapsPage } from '../pages/maps/maps';
import { ContatosPage } from "../pages/contatos/contatos";
import { DbmanagerProvider } from "../providers/dbmanager/dbmanager";

@Component({
  templateUrl: 'app.html',
  providers: [DatabaseProvider],
})

export class MyApp {

  @ViewChild('content') nav: Nav;
  public rootPage: any;
  // public nav: any;

  public pages = [
    {
      title: 'Início',
      icon: 'home',
      count: 0,
      component: HomePage
    }, {
      title: 'Meus Jogos',
      icon: 'flash',
      count: 0,
      component: GameListPage
    }, {
      title: 'Mapa',
      icon: 'map',
      count: 0,
      component: MapsPage
    }, {
      title: 'Usuários',
      icon: 'person-add',
      count: 0,
      component: UserListPage
    }, {
      title: 'Contatos',
      icon: 'contacts',
      count: 0,
      component: ContatosPage
    }, {
      title: 'Sobre',
      icon: 'information-circle',
      count: 0,
      component: AboutPage
    }
  ];

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private database: DatabaseProvider,
              private dbmanagerProvider: DbmanagerProvider,) {
    this.rootPage = TabsPage;
    this.init();
  }

  init() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPages(page) {
    this.nav.setRoot(page.component);
  }
}
