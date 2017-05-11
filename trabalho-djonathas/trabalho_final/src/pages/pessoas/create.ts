import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DBManager} from "../../providers/db-manager";

import {ContatosPage} from "../contatos/contatos";
import {Pessoa} from "../../classes/Pessoa";

/**
 * Generated class for the NovaPessoa page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-nova-pessoa',
  templateUrl: 'create.html',
})
export class PessoaCreatePage {

  public pessoa: Pessoa = new Pessoa();

  constructor(public navCtrl: NavController, public dbManager: DBManager) {

  }

  ionViewDidEnter() {
    this.pessoa.nome = localStorage.contatoTempNome;
    this.pessoa.endereco = localStorage.contatoTempEndereco;
    this.pessoa.telefone = localStorage.contatoTempTelefone;
    localStorage.contatoTempNome = "";
    localStorage.contatoTempEndereco = "";
    localStorage.contatoTempTelefone = "";
  }


  showContacts() {
    this.navCtrl.push(ContatosPage);
  }

  save() {
    let callback = db => {
      let transaction = db.transaction("pessoas", "readwrite").objectStore("pessoas");

      let op = transaction.add(this.pessoa);

      op.onerror = function (event) {
        alert(op.error);
        db.close()
      };

      op.onsuccess = function (event) {
        alert('Pessoa cadastrada com sucesso!');
        db.close()
      };

      this.pessoa = new Pessoa()
    };

    this.dbManager.run(callback)
  }

}
