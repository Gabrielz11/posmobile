import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-contact-add',
  templateUrl: 'contact-add.html',
  providers: [Contacts]
})
export class ContactAdd {

  newContract =  {
        familyName: '',
        givenName: '',
        nickname: '',
        phnumber: '',
        phtype: ''
    }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts) { }

  addcontact(self) {
      let contact: Contact = this.contacts.create();
      contact.name = new ContactName(null,this.newContract.familyName,this.newContract.givenName);
      contact.nickname = this.newContract.nickname;
      
      var contactfield = new ContactField();
      contactfield.type = this.newContract.phtype;
      contactfield.value = this.newContract.phnumber;
      contactfield.pref = true;
      
      var numbersection = [];
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
