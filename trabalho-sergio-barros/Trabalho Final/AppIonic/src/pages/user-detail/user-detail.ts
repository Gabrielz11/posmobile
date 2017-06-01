import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { UserListPage } from "../user-list/user-list";

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  public selectedItem: any;
  public nome: any;
  public email: any;
  public toastSuccess;
  public toastFail;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private database: DatabaseProvider) {
    this.selectedItem = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

  update(name: string, email: string, id: number) {
    this.database.updateUser(name, email, id)
      .then((result) => {
        this.toastSuccess = this.toastCtrl.create({
          message: 'Usuário atualizado com sucesso!',
          duration: 3000
        });
        this.toastSuccess.present();
        this.navCtrl.setRoot(UserListPage)
      }, (error) => {
        this.toastFail = this.toastCtrl.create({
          message: 'Falha ao atualizar o usuário!',
          duration: 3000
        });
        this.toastFail.present();
        console.log("ERROR: ", error);
      });
  }

  delete(id: number) {
    this.database.deleteUser(id)
      .then((result) => {
        this.toastSuccess = this.toastCtrl.create({
          message: 'Usuário deletado com sucesso!',
          duration: 3000
        });
        this.toastSuccess.present();
        this.navCtrl.setRoot(UserListPage)
      }, (error) => {
        this.toastFail = this.toastCtrl.create({
          message: 'Falha ao deletar o usuário!',
          duration: 3000
        });
        this.toastFail.present();
        console.log("ERROR: ", error);
      });
  }
}
