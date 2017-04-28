import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-list',
  templateUrl: 'maps.html'
})

export class MapsPage {

  public coordenadas:Coordinates;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordenadas = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MapsPage, {
      item: item
    });
  }
}
