import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { ContatosDetalhePage } from '../contatosdetalhe/contatosdetalhe';



@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
  providers: [UserProvider]
})
export class HttpPage {
  public people: any;
  constructor(public navCtrl: NavController, public userprovider: UserProvider) {
    this.loadPeople();
  }

  loadPeople() {
    this.userprovider.load()
      .then(data1 => {
        this.people = data1;
      });
  }

  carregaPagina(pessoa) {
    console.log("EVENTO CLICK DO BOTÃO");
    this.navCtrl.push(ContatosDetalhePage, {
      pessoa: pessoa
    });
  }

}
