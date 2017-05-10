import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Pessoa} from "../../classes/Pessoa";

/**
 * Generated class for the Pessoas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'details-pessoas',
  templateUrl: 'details.html',
})
export class PessoaDetailsPage {

  public pessoa: Pessoa;

  constructor(public navParams: NavParams) {
     this.pessoa = navParams.data
  }

  ionViewDidLoad() {

  }
}
