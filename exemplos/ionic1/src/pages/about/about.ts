import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user-provider'

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  users:any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
    this.userProvider.getUsers().subscribe(
      data => this.users = data.results
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

}
