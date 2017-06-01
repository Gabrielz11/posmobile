import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contacts, Contact } from '@ionic-native/contacts';
import { ContactAdd } from '../contact-add/contact-add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [Contacts]
})
export class ContactPage {

  contactList: Contact[];

  constructor(
    public navCtrl: NavController,
    private contacts: Contacts) { }

  ionViewWillEnter() {
    this.findAllContacts()
  }

  findAllContacts() {
    this.contacts.find(['*']).then((contacts) => {
      this.contactList = contacts;
    })
  }

  addContact() {
    this.navCtrl.push(ContactAdd)
  }
}
