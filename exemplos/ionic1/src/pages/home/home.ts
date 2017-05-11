import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome:string = "Fulano";
  constructor(public navCtrl: NavController) {

  }

}
