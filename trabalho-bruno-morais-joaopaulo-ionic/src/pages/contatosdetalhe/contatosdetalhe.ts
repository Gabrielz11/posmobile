import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contatosdetalhe',
  templateUrl: 'contatosdetalhe.html',
})
export class ContatosDetalhePage {

  public pessoa:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.pessoa = params.get("pessoa");
  }

}
