import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {DBManager} from "../../providers/db-manager";

import {NovaPessoaPage} from "../nova-pessoa/nova-pessoa";

/**
 * Generated class for the Pessoas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pessoas',
  templateUrl: 'pessoas.html',
})
export class PessoasPage {

  public pessoas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbManager: DBManager) {
    let callback = db => {
      let transaction = db.transaction("pessoas", "readwrite").objectStore("pessoas");
      let op = transaction.getAll();

      let setPessoas = (pessoas) => {
        this.pessoas = pessoas
      };

      op.onerror = function (event) {
        alert(op.error)
      };

      op.onsuccess = function (event) {
        setPessoas(op.result);
      };
    };

    this.dbManager.run(callback)
  }

  ionViewDidLoad() {

  }

  goToNovo() {
    this.navCtrl.push(NovaPessoaPage);
  }
}
