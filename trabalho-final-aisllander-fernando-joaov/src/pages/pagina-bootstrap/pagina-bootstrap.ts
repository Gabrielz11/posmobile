import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from "../home/home";
import {Contatos} from "../contatos/contatos";
import {AgendaOnline} from "../agenda-online/agenda-online";
import {Status} from "../status/status";

import { App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/**
 * Essa page é a primeira que é carregada, ela vai no armazenamento interno(storage) e busca
 * qual foi a ultima pagina acesssada e a carrega.
 *
 */
export class PaginaBootstrap {
  constructor(public app: App, public navCtrl: NavController, private storage: Storage) {

    this.storage.ready().then(() => {
      this.storage.get('ultimapaginaacessada').then((val) => {
        console.log("pagina selecionado"+ val);
        if(val=="home") {
          this.navCtrl.setRoot(HomePage);

        }else if(val=="agendaonline"){
          this.navCtrl.setRoot(AgendaOnline);

        }else if(val=="contatos"){
          this.navCtrl.setRoot(Contatos);

        }else if(val=="status"){
          this.navCtrl.setRoot(Status);

        }else{
          this.navCtrl.setRoot(HomePage);

        }
      })
    });


  }


}
