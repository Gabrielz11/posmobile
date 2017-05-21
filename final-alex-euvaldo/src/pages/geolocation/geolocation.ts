import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage 
{
  public coordenadas: Coordinates;
  latitude: number = 0;
  longitude: number = 0;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public geolocation: Geolocation) {
  }

  getMyLocation(){
  	var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };

  	this.geolocation.getCurrentPosition(posOptions).then((resp) => {
	  this.coordenadas = resp.coords;
	  this.latitude = this.coordenadas.latitude;
	  this.longitude = this.coordenadas.longitude;
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

}
