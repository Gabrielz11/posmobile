import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatosLocalDetalhes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contatos-local-detalhes',
  templateUrl: 'contatos-local-detalhes.html',
})
export class ContatosLocalDetalhes {

  contato:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.contato = navParams.get('contato')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosLocalDetalhes');
  }

}
