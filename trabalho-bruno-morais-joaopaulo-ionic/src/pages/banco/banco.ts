import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-banco',
  templateUrl: 'banco.html'
})
export class BancoPage {
  //public properties
  public users: any[] = [];
  public user: any = {};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public userService: UserService, protected platform: Platform) {
    //Platform
    platform.ready().then(() => {
      this.buscarUsers();
    });
  }

  addUser(user: {nome: string, telefone: string}) {
    this.userService.inserir({id: 0, nome: user.nome, telefone: user.telefone})
    .then(() => {
      let alert = this.alertCtrl.create({
        title: "Cadastro",
        subTitle: "Usuario cadastrado com sucesso",
        buttons: [
          {
              text: 'OK',
              handler: () => {
                this.buscarUsers();
              }
          }
        ]
      });
      alert.present();
    })
    .catch((error) => {
      let alert = this.alertCtrl.create({
        title: "Cadastro",
        subTitle: "Erro ao tentar cadastrar usuario",
        buttons: ["OK"]
      });
      alert.present();
      console.log('Erro ao tentar inserir', error);
    })
  }

  removeUser(user: any) {
    this.userService.apagar(user)
    .then(() => {
      let alert = this.alertCtrl.create({
        title: "Exclusão",
        subTitle: "Usuario excluido com sucesso",
        buttons: [{
            text: 'OK',
            handler: () => {
              this.buscarUsers();
            }
        }]
      });
      alert.present();
    })
    .catch((erro) => {
      let alert = this.alertCtrl.create({
        title: "Exclusão",
        subTitle: "Erro ao tentar excluir usuário",
        buttons: ["OK"]
      });
      alert.present();
    });
  }

  buscarUsers() {
    this.userService.buscar()
    .then(promise => {
      console.log("Busca realizada com sucesso");
      this.users = this.userService.users;
    });
  }
}
