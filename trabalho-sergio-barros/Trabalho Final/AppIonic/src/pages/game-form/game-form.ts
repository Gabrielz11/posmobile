import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DatabaseProvider } from '../../providers/database/database';

import { GameListPage } from '../game-list/game-list';

@IonicPage()
@Component({
  selector: 'page-game-form',
  templateUrl: 'game-form.html'
})
export class GameFormPage {

  public numeros: any;
  public concurso: any;
  public datasorteio: any;
  public maskNumber = [/[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/,];
  public maskConcurso = [/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/,];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameFormPage');
  }

  create(numbers: number, concurso: number, data_sorteio: string) {
    this.database.createGame(numbers, concurso, data_sorteio)
      .then(() => {
        let toastSuccess = this.toastCtrl.create({
          message: 'Jogo adicionado com sucesso!',
          duration: 3000
        });
        toastSuccess.present();
        this.navCtrl.setRoot(GameListPage)
      }, (error) => {
        let toastFail = this.toastCtrl.create({
          message: 'Falha ao cadastrar jogo!',
          duration: 3000
        });
        toastFail.present();
        console.log("ERROR: ", error);
      });
  }

  // saveStorage() {
  // set a key/value
  // this.storage.set('name', 'Max');

  // Or to get a key/value pair
  // this.storage.get('name').then((val) => {
  //  console.log('Your name is', val);
  //});
  // }
}
