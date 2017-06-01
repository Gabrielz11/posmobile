import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { GameListPage } from '../game-list/game-list';

@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {

  public selectedGameItem: any;
  public maskNumberUpdate = [/[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/,];
  public maskConcursoUpdate = [/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/,];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
    this.selectedGameItem = navParams.get('game');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailPage');
  }

  update(numbers: number, concurso: number, data_sorteio: string, id: number) {
    this.database.updateGame(numbers, concurso, data_sorteio, id)
      .then(() => {
        let toastSuccess = this.toastCtrl.create({
          message: 'Usuário atualizado com sucesso!',
          duration: 3000
        });
        toastSuccess.present();
        this.navCtrl.setRoot(GameListPage)
      }, (error) => {
        let toastFail = this.toastCtrl.create({
          message: 'Falha ao atualizar o usuário!',
          duration: 3000
        });
        toastFail.present();
        console.log("ERROR: ", error);
      });
  }

  delete(id: number) {
    this.database.deleteGame(id)
      .then(() => {
        let toastSuccess = this.toastCtrl.create({
          message: 'Usuário deletado com sucesso!',
          duration: 3000
        });
        toastSuccess.present();
        this.navCtrl.setRoot(GameListPage)
      }, (error) => {
        let toastFail = this.toastCtrl.create({
          message: 'Falha ao deletar o usuário!',
          duration: 3000
        });
        toastFail.present();
        console.log("ERROR: ", error);
      });
  }
}
