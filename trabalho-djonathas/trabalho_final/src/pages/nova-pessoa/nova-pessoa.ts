import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContatosPage } from '../contatos/contatos';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaPessoa');
  }

  showContacts() {
    this.navCtrl.push(ContatosPage);
  }

}
