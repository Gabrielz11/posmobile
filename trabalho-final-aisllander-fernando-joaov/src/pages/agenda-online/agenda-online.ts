import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda-provider';
import { ContatoDetail } from '../contato-detail/contato-detail';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AgendaOnline page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-agenda-online',
  templateUrl: 'agenda-online.html',
  providers: [AgendaProvider],
})
export class AgendaOnline {

  contatos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public agendaProvider:AgendaProvider,
              private storage: Storage) {


  }

  ionViewDidLoad() {
    this.getAllContacts();
    //indica que essa é ultima pagina acessada no storage
    this.storage.ready().then(() => {
      // set a key/value
      this.storage.set('ultimapaginaacessada', 'agendaonline');
    });
  }

  atualiza(refresher){
    setTimeout(()=>{
      this.getAllContacts();
      refresher.complete();
    },2000)
  }

  getAllContacts(){
    this.agendaProvider.getPeoples().subscribe(result => {
      this.contatos = result.results;
    })
  }

  contactDetail(contact){
    this.navCtrl.push(ContatoDetail, {
      contato:contact
    })
  }
}
