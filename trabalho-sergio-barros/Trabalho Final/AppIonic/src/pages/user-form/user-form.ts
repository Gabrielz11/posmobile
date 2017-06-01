import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { UserListPage } from '../user-list/user-list';

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage {

  public nome: any;
  public email: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }

  create(name: string, email: string) {
    this.database.createUser(name, email)
      .then(() => {
        let toastSuccess = this.toastCtrl.create({
          message: 'Usuário adicionado com sucesso!',
          duration: 3000
        });
        toastSuccess.present();
        this.navCtrl.setRoot(UserListPage)
      }, (error) => {
        let toastFail = this.toastCtrl.create({
          message: 'Falha ao cadastrar usuário!',
          duration: 3000
        });
        toastFail.present();
        console.log("ERROR: ", error);
      });
  }
}
