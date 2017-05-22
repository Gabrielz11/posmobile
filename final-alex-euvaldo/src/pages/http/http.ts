import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HttpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage 
{
  pessoas: any

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public http: Http) {

  	this.http.get('https://randomuser.me/api/?results=10')
  		.map(res => res.json())
  		.subscribe(data => {
        this.pessoas = data.results;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpPage');
  }

}
