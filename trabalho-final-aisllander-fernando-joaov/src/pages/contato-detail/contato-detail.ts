import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPosition } from '../contact-position/contact-position';
/**
 * Generated class for the ContatoDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-contato-detail',
  templateUrl: 'contato-detail.html',
})
export class ContatoDetail {

  contato:any

  lat:any
  lng:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contato = navParams.get('contato')
  }

  showMap(nome){
    this.navCtrl.push(ContactPosition, {
      nome:nome
    })
  }

}
