import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { Contacts, Contact, ContactFieldType } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contactsList:Contact[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public contacts:Contacts,
    private alertCtrl:AlertController,
    private modalCtrl: ModalController,
    private diagnostic: Diagnostic
  ) {
    this.diagnostic.requestContactsAuthorization()
      .then((response) => this.obterListaContatos())
      .catch((response) => console.log('usuario pode ter negado acesso.'));
  }

  obterListaContatos() {
    let fields:ContactFieldType[] = ['id', 'displayName'];
    let options = {multiple: true};

    this.contacts.find(fields, options)
      .then(data => this.contactsList = data)
      .catch(error => this.exibirMsgErro());
  }

  exibirMsgErro() {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'Parece que você não possui contatos disponíveis!',
      buttons: ['OK']
    });
    alert.present();
  }



}
