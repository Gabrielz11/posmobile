import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactFieldType } from '@ionic-native/contacts';

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

  public contactsList:Contact[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public contacts: Contacts) {
  }

  ionViewDidLoad() {
    this.loadContacts()
  }

  loadContacts() {
    let fields:ContactFieldType[] = ['id'];
    let options = {multiple: true};

    this.contacts.find(fields, options)
      .then(data => this.contactsList = data)
      .catch(error => console.log("erro"));
  }
}
