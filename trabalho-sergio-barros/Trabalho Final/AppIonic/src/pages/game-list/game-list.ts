import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { GameFormPage } from '../game-form/game-form';
import { GameDetailPage } from '../game-detail/game-detail';

@IonicPage()
@Component({
  selector: 'page-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  public games: Array<Object>;
  public gameFormPage = GameFormPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameListPage');
    this.load();
  }

  load() {
    this.database.getGames()
    .then((result) => {
      this.games = <Array<Object>> result;
      let toastSuccess = this.toastCtrl.create({
        message: 'Jogos carregados com sucesso!',
        duration: 3000
      });
      toastSuccess.present();
    }, (error) => {
      let toastFail = this.toastCtrl.create({
        message: 'Falha ao carregar jogos!',
        duration: 3000
      });
      toastFail.present();
      console.log("ERROR: ", error);
    });
    console.log(this.games);
  }

  itemTapped(event, game) {
    this.navCtrl.push(GameDetailPage, {
      game: game
    });
  }
}
