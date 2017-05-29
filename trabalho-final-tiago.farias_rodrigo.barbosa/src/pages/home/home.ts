import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public alunos: Array<{nome: string, sobrenome: string}>;

  constructor(public navCtrl: NavController) {

    this.alunos = [
      {
        nome: 'Rodrigo',
        sobrenome: 'Barbosa Rodrigues'
      },
      {
        nome: 'Tiago',
        sobrenome: 'Farias'
      }
    ];

  }

}
