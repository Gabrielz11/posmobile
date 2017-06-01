import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { Contacts, Contact, ContactFieldType } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SMS } from '@ionic-native/sms';

import { ContatosFormPage } from '../contatos-form/contatos-form';

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  public contactsList: Contact[];
  public contactFormPage = ContatosFormPage;

  constructor(public navCtrl: NavController,
              public contacts: Contacts,
              public loadingCtrl: LoadingController,
              public diagnostic: Diagnostic,
              private sms: SMS,
              public toastCtrl: ToastController,
              private alertCtrl: AlertController) {
    this.diagnostic.isContactsAuthorized().then(autorizado => {
      if (!autorizado) {
        this.diagnostic.requestContactsAuthorization().catch(e => alert(e));
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');
    this.loadContacts()
  }

  loadContacts() {
    let loader = this.loadingCtrl.create({
      content: "Carregando contatos..."
    });
    loader.present();

    let fields: ContactFieldType[] = ['*'];
    let options = {multiple: true};

    this.contacts.find(fields, options)
      .then(data => {
        this.contactsList = data;
        loader.dismiss();
      })
      .catch(error => {
        console.log(error.message);
        loader.dismiss();
      });
  }

  getContact(contato: Contact) {

      let alert = this.alertCtrl.create({
        title: contato.displayName,
        message: 'Deseja enviar um convite?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              var options={
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                  // intent: 'INTENT'  // Opens Default sms app
                  intent: '' // Sends sms without opening default sms app
                }
              };
              // this.sms.send(contato.phoneNumbers.toString(),
              this.sms.send('63 992093722',
                'Conheça o EasySena!',
                options).then(()=>{
                  let toastSuccess = this.toastCtrl.create({
                    message: 'Usuário adicionado com sucesso!',
                    duration: 3000
                  });
                  toastSuccess.present();
                },()=>{
                  let toastFail = this.toastCtrl.create({
                    message: 'Falha ao enviar mensagem!',
                    duration: 3000
                  });
                });
            }
          },
          {
            text: 'Contatar',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();
    // localStorage.contato_nome = contato.displayName;
    // localStorage.contato_endereco = contato.addresses ? contato.addresses[0].formatted : "";
    // localStorage.contato_telefone = contato.phoneNumbers ? contato.phoneNumbers[0].value : "";
    // this.navCtrl.pop();
  }
}
