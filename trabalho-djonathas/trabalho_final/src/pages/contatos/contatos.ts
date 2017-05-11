import {Component} from "@angular/core";
import {LoadingController, NavController} from "ionic-angular";
import {Contact, ContactFieldType, Contacts} from "@ionic-native/contacts";
import {Diagnostic} from "@ionic-native/diagnostic";

/**
 * Generated class for the Contatos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  public contactsList: Contact[];

  constructor(public navCtrl: NavController, public contacts: Contacts, public loadingCtrl: LoadingController, public diagnostic: Diagnostic) {
    this.diagnostic.isContactsAuthorized().then( autorizado => {
      if (!autorizado) {
        this.diagnostic.requestContactsAuthorization().catch(e => alert(e));
      }
    })
  }

  ionViewDidLoad() {
    this.loadContacts()
  }

  loadContacts() {
    let loader = this.loadingCtrl.create({
      content: "Obtendo dados dos contatos..."
    });

    loader.present();

    let fields: ContactFieldType[] = ['id'];
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
    localStorage.contatoTempNome = contato.displayName;
    localStorage.contatoTempEndereco = contato.addresses ? contato.addresses[0].formatted : "";
    localStorage.contatoTempTelefone = contato.phoneNumbers ? contato.phoneNumbers[0].value : "";
    this.navCtrl.pop();
  }
}
