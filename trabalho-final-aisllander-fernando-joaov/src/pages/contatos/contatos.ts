import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController} from 'ionic-angular';
import { Contacts,ContactFieldType, ContactFindOptions} from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';
import {ContatosLocalDetalhes} from "../contatos-local-detalhes/contatos-local-detalhes";

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
export class Contatos {

    contatos = []
    grupoContatos = [];

    contatosencontrados = [];
    busca = false;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              private contacts: Contacts,
              private storage: Storage,
              public loadingController: LoadingController) {

    }//fim do construtor

    listadeContatos(contatos){

        let organizarContatos = contatos.sort(function(a, b){
            if(a.displayName < b.displayName) return -1;
            if(a.displayName > b.displayName) return 1;
            return 0;
        });

        let letraAtual = '';
        let contatosAtuais = [];

        organizarContatos.forEach((value, index) => {

            if(value.displayName[0] !=  letraAtual){

                letraAtual = value.displayName[0];

                let novoGrupo ={
                    letra: letraAtual,
                    contatos:[]
                };

                contatosAtuais = novoGrupo.contatos;
                this.grupoContatos.push(novoGrupo);
            }
            contatosAtuais.push(value);
        });
    }

    buscarContato(ev:any) {

        let campos:ContactFieldType[] = ['displayName'];

        const options = new ContactFindOptions();

        options.filter = ev.target.value;
        options.multiple = true;
        options.hasPhoneNumber = true;

        this.contacts.find(campos, options).then((contacts) => {
          this.contatosencontrados = contacts;
          console.log(JSON.stringify(contacts[0]));
        });

        if(this.contatosencontrados.length == 0){
          this.contatosencontrados.push({displayName: 'Nenhum Contato encontrado.'});
        }
        this.busca = true;
    }

    exibirContato(contato){

        this.navCtrl.push(ContatosLocalDetalhes,{contato:contato});
    }

    ionViewDidLoad() {
        //indica que essa é ultima pagina acessada no storage
        this.storage.ready().then(() => {
            // set a key/value
            this.storage.set('ultimapaginaacessada', 'contatos');
        });

        //mostra um alerta de carregando
        let loader = this.loadingController.create({
            content: "Carregando...."
        });

        loader.present().then(() => {

            this.platform.ready().then(() => {

                var opts = {
                    //filter: "A",
                    multiple: true,
                    hasPhoneNumber:true
                };

                this.contacts.find(["displayName", "phoneNumbers"],opts).then((contacts) => {

                    for (var i=0 ; i < contacts.length; i++){
                        if(contacts[i].displayName !== null){
                            var obj = {};
                            obj["displayName"] = contacts[i].displayName;
                            obj["phoneNumbers"] = contacts[i].phoneNumbers[0].value;
                            //obj["email"] = contacts[i].emails[0].value;
                            this.contatos.push(obj);
                        }
                    }

                    this.listadeContatos(this.contatos);
                    loader.dismiss();

                }, (error) => {
                    loader.dismiss();
                    console.log(error);
                })

            });
        });
    }

}//fim da classe

