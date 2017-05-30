import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { UserFormPage } from '../user-form/user-form';
import { UserDetailPage } from '../user-detail/user-detail';

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  public users: Array<Object>;

  userFormPage = UserFormPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
    this.load();
  }

  load() {
    this.database.getUsers()
      .then((result) => {
        this.users = <Array<Object>> result;
        let toastSuccess = this.toastCtrl.create({
          message: 'Usuários carregados com sucesso!',
          duration: 3000
        });
        toastSuccess.present();
      }, (error) => {
        let toastFail = this.toastCtrl.create({
          message: 'Falha ao carregar usuários!',
          duration: 3000
        });
        toastFail.present();
        console.log("ERROR: ", error);
      });
  }

  itemTapped(event, user) {
    this.navCtrl.push(UserDetailPage, {
      user: user
    });
  }

}
