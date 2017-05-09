import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {DBManager} from "../../providers/db-manager";

import {ContatosPage} from "../contatos/contatos";

/**
 * Generated class for the NovaPessoa page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nova-pessoa',
  templateUrl: 'nova-pessoa.html',
})
export class NovaPessoaPage {

  public nome: string;
  public telefone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbManager: DBManager) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaPessoa');
  }

  showContacts() {
    this.navCtrl.push(ContatosPage);
  }

  clearInputs = () => {
    this.nome = "";
    this.telefone = "";
  };

  save() {
    let callback = db => {
      let transaction = db.transaction("pessoas", "readwrite").objectStore("pessoas");
      let op = transaction.add({"nome": this.nome, "telefone": this.telefone});

      op.onerror = function (event) {
        alert(op.error)
      };

      op.onsuccess = function (event) {
        alert("inserido com sucesso!")
      };

      this.nome = "";
      this.telefone = "";
    };

    this.dbManager.run(callback)
  }

}
