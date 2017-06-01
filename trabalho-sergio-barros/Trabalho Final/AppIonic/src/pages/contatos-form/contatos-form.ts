import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-contatos-form',
  templateUrl: 'contatos-form.html',
})
export class ContatosFormPage {

  newContact = { familyName: '', givenName: '', nickname: '', phnumber: '', phtype: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private contacts: Contacts) {
  }

  addContact(self) {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, this.newContact.familyName, this.newContact.givenName);
    contact.nickname = this.newContact.nickname;

    let contactfield = new ContactField();
    contactfield.type = this.newContact.phtype;
    contactfield.value = this.newContact.phnumber;
    contactfield.pref = true;

    let numbersection = [];
    numbersection.push(contactfield);
    contact.phoneNumbers = numbersection;

    contact.save().then((contact) => {
      alert('Contato adicionado com sucesso');
      this.navCtrl.pop()
    }, (error) => {
      alert(error);
    })
  }

}
